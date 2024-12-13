'use client';

import { membersJobUpdateApi } from '@/api/member/member.api';
import styles from '@/app/(afterLogin)/_components/modals/imageModal/imageModal.module.scss';
import useMemberStore from '@/store/member.js/member';
import useProfileStatusStore from '@/store/profileStatus/profileStatus';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ImageModal() {
  const router = useRouter();
  const profileStatus = useProfileStatusStore((state) => state.profileStatus);
  const member = useMemberStore((state) => state.member);
  const [status, setStatus] = useState('');
  const [reason, setReason] = useState('없음');
  const { field, memberId, memberVerifyId, authUrl, jobType, websiteUrl } = member;

  useEffect(() => {
    if (profileStatus[field]) {
      setStatus(profileStatus[field][0]);
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClickClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const onClickClose = () => {
    router.back();
  };

  const onChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const onClickProfileUpdate = async () => {
    const newData = {
      status,
      reason,
      jobType,
    };

    try {
      if (field === 'authUrl' || field === 'websiteUrl') {
        await membersJobUpdateApi(memberVerifyId, newData);
      }
      alert('상태변경에 성공하였습니다.');
    } catch (err) {
      alert('상태변경에 실패하였습니다.');
      console.log(err);
    } finally {
      onClickClose();
    }
  };

  const onChangeReason = (e) => {
    setReason(e.target.value);
  };

  return (
    <div className={styles.modalBackground} onClick={onClickClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <header className={styles.modalHeader}>
          <button className={styles.closeButton} onClick={onClickClose}>
            <svg width={24} viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </button>
          <label>{`식별번호: ${memberVerifyId}`}</label>
        </header>
        <section className={styles.section}>
          <div className={styles.imgBox}>
            {field === 'websiteUrl' ? (
              <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {websiteUrl}
              </a>
            ) : (
              <img className={styles.img} src={authUrl} alt="인증 이미지" />
            )}
          </div>
          <select value={status} onChange={onChangeStatus}>
            {profileStatus[field]?.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
          <input placeholder="사유" onChange={onChangeReason}></input>
          <button onClick={onClickProfileUpdate}>변경</button>
        </section>
      </div>
    </div>
  );
}
