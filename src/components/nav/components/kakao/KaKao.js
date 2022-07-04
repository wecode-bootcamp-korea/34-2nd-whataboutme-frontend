import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";
import axios from "axios";
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from "../../../../OAuth";

const KaKao = () => {
  const location = useLocation();

  const code = qs.parse(location.search, { ignoreQueryPrefix: true }).code;

  const getToken = async () => {
    const payload = qs.stringify({
      Content_Type: "application/x-www-form-urlencoded",
      grant_type: "authorization_code",
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });

    await axios
      .post("https://kauth.kakao.com/oauth/token", payload)
      .then(res => localStorage.setItem("token", res.data.access_token))
      .catch(err => {
        alert("로그인에 실패하였습니다.");
      });

    window.open("http://localhost:3000", "_self");
  };

  useEffect(() => {
    getToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default KaKao;
