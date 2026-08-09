export interface GuestTokenPayload {
  sub: string;
  phone: string;
  type: 'guest' | 'companion';
}
