const siteList = [
  {
    id: 0,
    name: "네이버",
    siteUrl: "https://www.naver.com/",
    imgUrl:
      "https://i.namu.wiki/i/p_1IEyQ8rYenO9YgAFp_LHIAW46kn6DXT0VKmZ_jKNijvYth9DieYZuJX_E_H_4GkCER_sVKhMqSyQYoW94JKA.svg",
  },
  {
    id: 1,
    name: "카카오",
    siteUrl: "https://www.kakaocorp.com/page/",
    imgUrl: "https://cs.kakao.com/images/icon/img_kakaocs.png",
  },
  {
    id: 2,
    name: "구글",
    siteUrl: "https://www.google.com",
    imgUrl:
      "https://cdn.icon-icons.com/icons2/2699/PNG/512/google_logo_icon_169090.png",
  },
];

export const SiteEx = () => {
  return (
    <div>
      <h2>즐겨찾기</h2>
      {siteList.map((site) => (
        <div key={site.id}>
          <h3>
            <a href={site.siteUrl} target="_blank">
              {site.name}
            </a>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default SiteEx;
