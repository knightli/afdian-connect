import { homepage } from '@/package.json';

export default eventHandler(async e => {
  await sendRedirect(e, "./sponsors", 301);
});
