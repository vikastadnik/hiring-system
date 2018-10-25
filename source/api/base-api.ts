import Axios, { AxiosError, AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IPersonDTO } from '../interfaces';
import { HIRING_STAGES } from '../enums';

export class BaseApi {
  public static AXIOS_INSTANCE: AxiosInstance = Axios.create({});

  public static getPeople(): Promise<object> {
    return BaseApi.request({ url: 'https://randomuser.me/api/?nat=gb&results=5', method: 'GET' })
      .then((response: AxiosResponse): object => {
        return response.data.results.reduce((people: IPersonDTO[], currentPerson: any) => {
          const person: IPersonDTO = {
            name: `${currentPerson.name.title} ${currentPerson.name.first} ${currentPerson.name.last}`,
            picture: currentPerson.picture,
            city: currentPerson.location.city,
            stage: HIRING_STAGES.APPLIED
          };

          people.push(person);
          return people;
        }, []);
      });
  }

  private static request(options: AxiosRequestConfig): AxiosPromise {
    return BaseApi.AXIOS_INSTANCE.request(options)
      .catch((e: AxiosError): AxiosResponse => {
        throw e;
      });
  }

}
