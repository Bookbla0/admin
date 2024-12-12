'use client';

import useAuthStore from '@/store/auth/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from '@/app/(afterLogin)/after.module.scss';
import { alarmApi } from '@/api/alarm/alarm.api';
import useProfileStatusStore from '@/store/profileStatus/profileStatus';
import { httpApi } from '@/utils/api/api';
import { membersProfileStatusApi, membersBookmarkUpdatePatchApi } from '@/api/member/member.api';

export default function AfterLayout({ children }) {
  const router = useRouter();
  const setProfileStatus = useProfileStatusStore((state) => state.setProfileStatus);
  const { sessionId, setSessionId, removeSessionId } = useAuthStore();
  const [isAlarm, setIsAlarm] = useState(false);
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [memberId, setMemberId] = useState(0);
  const [isBookmark, setIsBookmark] = useState(false);

  const callApprovalStatus = async (sessionIdStorage) => {
    httpApi.defaults.headers.common['xxx-three-idiots-xxx'] = sessionIdStorage;
    const { result } = await membersProfileStatusApi();
    setProfileStatus({
      authUrl: result.memberVerifyStatuses,
      websiteUrl: result.memberVerifyStatuses,
    });
  };

  useEffect(() => {
    if (!sessionId) {
      const sessionIdStorage = window.sessionStorage.getItem('threeIdiots');
      if (sessionIdStorage) {
        setSessionId(sessionIdStorage);

        callApprovalStatus(sessionIdStorage);
        console.log('이게 작동했네');
      } else {
        router.replace('/BSDFJ#DSF%((DFKSJK!ADFFGA');
      }
    }
  }, [sessionId]);

  const onClickAlarm = async () => {
    if (!title || !contents) return alert('값이 비어 있습니다.');

    // 확인 alert 추가
    if (!window.confirm('알림을 전송하시겠습니까?')) return;
    try {
      await alarmApi({
        title,
        contents,
      });

      alert('알림 전송에 성공하였습니다.');
    } catch (err) {
      console.log('error', err);
      alert('알림 전송에 실패하였습니다.');
    } finally {
      setIsAlarm(false);
      setTitle('');
      setContents('');
    }
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContents(e.target.value);
  };

  const onClickLogout = async () => {
    alert('로그아웃 하였습니다.');
    await removeSessionId();
  };

  const onClickCreateBookmarkCount = async () => {
    if (!bookmarkCount || !memberId) return alert('값이 비어 있어요');

    if (!window.confirm(`${memberId}의 유저에게 ${bookmarkCount}만큼 올려주시겠습니까?`)) return;

    try {
      await membersBookmarkUpdatePatchApi({
        memberId,
        bookmarkCount,
      });
      alert('유저 북마크 수 올리는데에 성공하였습니다.');
    } catch (error) {
      console.log('error: {}', error);
      alert('유저 북마크 수 올리는데에 실패하였습니다.');
    } finally {
      setIsBookmark(false);
      setBookmarkCount(0);
      setMemberId(0);
    }
  };

  const onChangeMemberId = (e) => {
    setMemberId(e.target.value);
  };

  const onChangeBookmarkCount = (e) => {
    setBookmarkCount(e.target.value);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.headerNav}>
          <ul className={styles.headerUl}>
            <li className={styles.li}>
              <button>새로고침</button>
            </li>
            <li className={styles.li}>
              <button onClick={() => setIsAlarm(true)}>푸쉬알림 보내기</button>
            </li>
            {isAlarm && (
              <li className={styles.alarmLi}>
                <input placeholder="제목" onChange={onChangeTitle}></input>
                <input placeholder="내용" onChange={onChangeContent}></input>
                <button onClick={onClickAlarm}>전송</button>
                <button onClick={() => setIsAlarm(false)}>취소</button>
              </li>
            )}
            <li className={styles.li}>
              <button onClick={onClickLogout}>로그아웃</button>
            </li>
            <li className={styles.li}>
              <button onClick={() => setIsBookmark(true)}>북마크 수 올리기</button>
            </li>
            {isBookmark && (
              <li className={styles.alarmLi}>
                <input placeholder="멤버 아이디" onChange={onChangeMemberId}></input>
                <input placeholder="북마크 수" onChange={onChangeBookmarkCount}></input>
                <button onClick={onClickCreateBookmarkCount}>전송</button>
                <button onClick={() => setIsBookmark(false)}>취소</button>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <div className={styles.body}>
        <aside className={styles.aside}>
          <nav>
            <li>
              <a href="three-idiots-all" aria-current="aPage">
                전체 멤버
              </a>
            </li>
            <li>
              <a href="three-idiots-job" aria-current="ePage">
                신분인증 대기 멤버
              </a>
            </li>
            <li>
              <a href="three-idiots-payment" aria-current="gPage">
                결제 멤버
              </a>
            </li>
            <li>
              <a href="three-idiots-bookmark" aria-current="hPage">
                북마크 멤버
              </a>
            </li>
            <li>
              <a href="three-idiots-report" aria-current="fPage">
                신고 멤버
              </a>
            </li>
          </nav>
        </aside>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
