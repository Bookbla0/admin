import '@/app/globalStyles.scss';

export default function RootLayout({ children }) {
  /* TODO
  1. csr이 필요없는 페이지는 ssr로 변경하기
  2. esc 누르면 모달창 꺼지게 하기
  3. 반응형으로 변경하기
  4. 멤버프로필 상태 변경했으면 데이터 바뀐거 반영하기(api 요청 없이 메모리에서 수정)
  5. 보안을 위해 아예 세션스토리지 key 제거하기 로그아웃 시 또는 세션 만료 시
  6. axios 대신 fetch 사용 => 캐싱을 위해
*/
  return (
    <html lang="ko">
      <body>
        <>{children}</>
      </body>
    </html>
  );
}
