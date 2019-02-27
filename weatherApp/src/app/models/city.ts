import { AirData } from './airData';
import { SynopticData } from './synopticData';
export interface City {
  name: string;
  synopticDataList: Array<SynopticData>;
  airDataList: Array<AirData>;
}
