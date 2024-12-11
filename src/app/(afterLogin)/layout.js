'use client';

import useAuthStore from '@/store/auth/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from '@/app/(afterLogin)/after.module.scss';
import { alarmApi } from '@/api/alarm/alarm.api';
import useProfileStatusStore from '@/store/profileStatus/profileStatus';
import { httpApi } from '@/utils/api/api';
import { membersProfileStatusApi } from '@/api/member/member.api';

export default function AfterLayout({ children }) {
  const router = useRouter();
  const setProfileStatus = useProfileStatusStore((state) => state.setProfileStatus);
  const { sessionId, setSessionId, removeSessionId } = useAuthStore();
  const [isAlarm, setIsAlarm] = useState(false);
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const callApprovalStatus = async (sessionIdStorage) => {
    httpApi.defaults.headers.common['xxx-three-idiots-xxx'] = sessionIdStorage;
    const { result } = await membersProfileStatusApi();
    setProfileStatus({
      authUrl: result.memberVerifyStatuses,
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
    if (!title && !contents) return alert('값이 비어 있습니다.');

    // 확인 alert 추가
    if (!window.confirm('알림을 전송하시겠습니까?')) return;
    try {
      await alarmApi({
        title,
        contents,
      });
      setIsAlarm(false);
      setTitle('');
      setContents('');
      alert('알림 전송에 성공하였습니다.');
    } catch (err) {
      console.log('error', err);
      alert('알림 전송에 실패하였습니다.');
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
