import { querySponsor } from '@/afdian/api';
export default eventHandler(async e => {
  const data = (await querySponsor(1)).data;

  const result = data.list.map(item => {
    return {
      user: item.user,
      all_sum_amount : item.all_sum_amount,
      first_pay_time : item.first_pay_time,
      last_pay_time : item.last_pay_time,
      current_plan : item.current_plan,
      current_price: item.current_plan.price,
      current_expire_time: item.current_plan.expire_time,
      current_status: item.current_plan.status
    };
  });
  return result;
});
