import { fetchData } from '../service';

export const residentionalAreaGetHandler = async (req, res) => {
  const allResidentionalAreas = await fetchData();
  return res.status(200).send(allResidentionalAreas);
};
