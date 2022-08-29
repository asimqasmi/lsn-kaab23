export interface UserEntity {
  id: string;
  name: string;
  firstName?: string;
  lastName?: string;
  email: string;
  emailVerified: Date;
  image: string;
  isAdmin: boolean;
  isSuperAdmin?: boolean;
  potdReleaseTime: Date;
  isBetsColored: boolean;
  defaultColorMode: string;
  createdAt: Date;
}
