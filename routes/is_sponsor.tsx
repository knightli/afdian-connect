import { querySponsor } from '@/afdian/api';
export default eventHandler(async e => {
  const query = new URL(e.node.req.url, `http://${e.node.req.headers['host']}`)
    .searchParams;
  const user_id = query.get('user_id');
  const data = (await querySponsor(1)).data;

  const match_items = data.list.filter(item => item.user.user_id === user_id);
  return {
    is_sponsor: match_items.length > 0,
    sponsor_info: match_items.length > 0 ? match_items[0] : null
  }
});
