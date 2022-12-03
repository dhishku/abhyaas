import axios from "axios";

const buildClient = () => {
  if (typeof window === "undefined") {
    // We are on the server
    console.log('buildclient: running in server');

    return axios.create({
      baseURL:
        'http://stats-srv:3000'
        // "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local"
    });
  } else {
    // We must be on the browser
    console.log('buildclient: running in browser');
    return axios.create({
      baseUrl: "/",
    });
  }
};

export default buildClient;
