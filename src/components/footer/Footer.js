import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <CompanyInfo>
      <InfoWrapper>
        <InfoGroupLink>
          <FooterDesc>{FOOTER_DATA.company_info}</FooterDesc>
          <FooterDesc>{FOOTER_DATA.service}</FooterDesc>
          <FooterDesc>{FOOTER_DATA.privacy}</FooterDesc>
          <FooterDesc>{FOOTER_DATA.resolution}</FooterDesc>
          <FooterDesc>{FOOTER_DATA.business_info}</FooterDesc>
        </InfoGroupLink>
        <InfoGroupLink>
          <FooterDesc>{FOOTER_DATA.marketing_center}</FooterDesc>
          <FooterDesc>{FOOTER_DATA.hosting_center}</FooterDesc>
          <FooterDesc>{FOOTER_DATA.app_title}</FooterDesc>
          <FooterDesc>{FOOTER_DATA.contents_marker}</FooterDesc>
        </InfoGroupLink>
        <InfoGroupLink />
      </InfoWrapper>
      <CallCenter>
        <TelePhone>{FOOTER_DATA.client_call_center}</TelePhone>
        <OperateTime>{FOOTER_DATA.operate_time}</OperateTime>
      </CallCenter>
      <CompanyName>{FOOTER_DATA.company_name}</CompanyName>
      <CompanyAddress>
        <FooterDesc>{FOOTER_DATA.company_address}</FooterDesc>
        <FooterDesc>{FOOTER_DATA.company_ceo}</FooterDesc>
        <FooterDesc>{FOOTER_DATA.company_registration_Number}</FooterDesc>
      </CompanyAddress>
    </CompanyInfo>
  );
};

const CompanyInfo = styled.footer`
  padding: 5% 10%;
  background-color: #f5f5f5;
  color: #989898;
`;

const InfoWrapper = styled.div`
  margin-bottom: 30px;
`;

const InfoGroupLink = styled.div`
  margin-bottom: 10px;
  color: #989898;
`;

const FooterDesc = styled.span`
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #989898;
  color: #989898;

  &:last-child {
    border: 0;
    padding-right: 0;
    margin-right: 0;
  }
`;

const CallCenter = styled.div`
  margin-bottom: 30px;
`;

const TelePhone = styled.span`
  margin-right: 10px;
  font-weight: ${({ theme: { style } }) => style.fontWeights.extraBold};
`;

const OperateTime = styled.span``;

const CompanyName = styled.div`
  margin-bottom: 20px;
`;

const CompanyAddress = styled.div``;

export default Footer;

const FOOTER_DATA = {
  company_info: "회사소개",
  service: "이용약관",
  privacy: "개인정보처리방침",
  resolution: "소비자 분쟁해결 기준",
  business_info: "사업자 정보 확인",
  marketing_center: "나는어때 마케팅 센터",
  hosting_center: "액티비티 호스트 센터",
  app_title: "MOTEL 나는어때",
  contents_marker: "콘텐츠산업진흥법에의한 표시",
  client_call_center: "고객행복센터 1670-6250",
  operate_time: "오전 9시 ~ 새벽 3시",
  company_name: "나는어때컴퍼니",
  company_address: "주소: 서울특별시 테헤란로 427 위워크 10층",
  company_ceo: "대표이사 : 난뚠뚜",
  company_registration_Number: "사업자등록번호 : 321-32-32333",
};
