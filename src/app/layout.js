import '@/app/globalStyles.scss';

export default function RootLayout({ children }) {
  /* TODO
  1. csr이 필요없는 페이지는 ssr로 변경하기
  2. esc 누르면 모달창 꺼지게 하기
  3. 반응형으로 변경하기
  4. 멤버프로필 상태 변경했으면 데이터 바뀐거 반영하기(api 요청 없이 메모리에서 수정)
  5. 보안을 위해 아예 세션스토리지 key 제거하기 로그아웃 시 또는 세션 만료 시
  6. axios 대신 fetch 사용 => 캐싱을 위해
  7. 캐싱훅을 만들어서 캐시와 같은 기능 만들어보기 => 캐싱로직을 이해하기 위해
  8. 페이지네이션에 Size 기능 넣기
*/
  return (
    <html lang="ko">
      <body>
        <>{children}</>
      </body>
    </html>
  );
}
