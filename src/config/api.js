let host;

if(process.env.NODE_ENV == "test"){
  host = "http://localhost:4000";
}else{
  host = location.origin;
  //host = "http://api.apmsys.com:8000";
}

let userHost = "http://user.apmsys.com:8000";

const baseUri = host;
console.log(G_WEB_PARAMS);
export const API_CONFIG = {
  apiKey: G_WEB_PARAMS.apiKey,//,'e7afaf986f5cc822406cbd5831328462',
  host: host,
  userHost: userHost,
  baseUri: baseUri,
  auth: '/pages/v2/login',
  
  dashboard: '/p1/dashboards/{}/charts.json',
  show: '/p1/dashboards/{}/show.json',
  all_metrics: '/p1/metrics.json',
  updateLayout: '/p1/dashboards/{}/update.json',
  normal_model: '/p1/metric_types/normal_mode_list',
  metric: userHost+'/apmsys/v2/batch_query',
  
  //metric: '/v1/batch_query.json',
  tags: '/p1/tags.json',
  buckets: '/v1/events/buckets.json',
  users: '/api/v1/users',
};

