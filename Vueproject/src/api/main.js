import request from '@/router/axios';

//
export const main = () => request({
    url: '/api/tourism-investment/main/index',
    method: 'get',
})
