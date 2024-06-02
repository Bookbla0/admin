import { Get, Patch } from '@/utils/api/api';

export const membersApi = (page = 1) => Get(`/members?page=${page}`);

export const membersPendingProfileImage = (page = 1) => Get(`/members/pending/profile-image?page=${page}`);
export const membersPendingStudentImage = (page = 1) => Get(`/members/pending/student-id/image?page=${page}`);
export const membersPendingKakao = (page = 1) => Get(`/members/pending/kakao?page=${page}`);

export const membersApprovalApi = (page = 1) => Get(`/members/approval?page=${page}&size=25`);

export const membersProfileStatusApi = () => Get('/member/profile/status');

export const membersProfileUpdateApi = (memberVerifyId, contents) => Patch(`member-verifies/${memberVerifyId}/pending/profile-image`, contents);
export const membersStudentIdUpdateApi = (memberVerifyId, contents) => Patch(`member-verifies/${memberVerifyId}/pending/student-id/image`, contents);
export const membersKakaoUpdateApi = (memberVerifyId, contents) => Patch(`member-verifies/${memberVerifyId}/pending/kakao`, contents);
