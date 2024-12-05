import { Get, Patch } from '@/utils/api/api';

export const membersApi = (page = 1) => Get(`/members?page=${page}`);

export const membersPendingJobImage = (page = 1) => Get(`/members/pending/job/image?page=${page}&sort=id,desc`);

export const membersProfileStatusApi = () => Get('/member/profile/status');

export const membersJobUpdateApi = (memberVerifyId, contents) =>
  Patch(`member-verifies/${memberVerifyId}/pending/job/image`, contents);
