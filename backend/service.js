import fetch from "node-fetch";

export const fetchData = async () => {
  const allResidentionalAreas = [];
  await fetch('https://ncov.html5.qq.com/api/getCommunity?province=%E5%B9%BF%E4%B8%9C%E7%9C%81&city=%E6%B7%B1%E5%9C%B3%E5%B8%82', {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(json => {
      cleanData(json, allResidentionalAreas);
    })
    .catch(function (error) {
      console.log('Looks like there was a problem: \n', error);
    });
  return allResidentionalAreas;
}

const cleanData = (jsonData, allResidentionalAreas) => {
  const keys = Object.keys(jsonData.community['广东省']['深圳市']);
  const allAreas = keys.map(key => jsonData.community['广东省']['深圳市'][key]);
  allAreas.forEach(district => district.forEach(area => {
    allResidentionalAreas.push({
      'full_address': area.full_address,
      'lng': area.lng,
      'lat': area.lat
    });
  }))
  return allResidentionalAreas;
};