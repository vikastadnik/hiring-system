import Axios, { AxiosError, AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IPersonDTO } from '../interfaces';
import { HIRING_STAGES } from '../enums';

const data: any = {"results":[{"gender":"female","name":{"title":"ms","first":"ella","last":"grant"},"location":{"street":"2255 london road","city":"newcastle upon tyne","state":"merseyside","postcode":"T25 9HG","coordinates":{"latitude":"47.6522","longitude":"164.6164"},"timezone":{"offset":"-3:30","description":"Newfoundland"}},"email":"ella.grant@example.com","login":{"uuid":"55e5358a-a1c4-4b81-9738-14f0a95c5ac0","username":"orangebird357","password":"cloud","salt":"hYqTGfwE","md5":"7ef48857c7db24efc638064cbc230392","sha1":"e05053237b50cdb4c496c0ac9f3906b2ac340c9d","sha256":"dd762b132a85b6c77c03f08a39e700337f603a8f17cb61e22b73fe9daeb0113b"},"dob":{"date":"1996-03-20T09:04:09Z","age":22},"registered":{"date":"2002-04-07T13:19:31Z","age":16},"phone":"016977 61700","cell":"0781-265-798","id":{"name":"NINO","value":"YW 66 57 67 U"},"picture":{"large":"https://randomuser.me/api/portraits/women/62.jpg","medium":"https://randomuser.me/api/portraits/med/women/62.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/62.jpg"},"nat":"GB"},{"gender":"female","name":{"title":"mrs","first":"isabella","last":"romero"},"location":{"street":"9858 new street","city":"preston","state":"west yorkshire","postcode":"I2K 7HG","coordinates":{"latitude":"3.3145","longitude":"-45.9589"},"timezone":{"offset":"-12:00","description":"Eniwetok, Kwajalein"}},"email":"isabella.romero@example.com","login":{"uuid":"17a559cd-4a19-4413-91d2-138ac0ca1fc9","username":"orangetiger739","password":"jennifer","salt":"RSrmwKP2","md5":"6cff3bb3e266d587ebea452159b92224","sha1":"0daed5072b4ef560663e9005dd7721775f9d5ca5","sha256":"92ebbf825bb1685f3bd2f13f28b0542e391e9087fc5e301efe31ffdc6dc0a924"},"dob":{"date":"1957-10-12T21:46:56Z","age":61},"registered":{"date":"2013-09-15T14:26:26Z","age":5},"phone":"0151 720 9678","cell":"0798-999-143","id":{"name":"NINO","value":"TM 16 91 10 R"},"picture":{"large":"https://randomuser.me/api/portraits/women/27.jpg","medium":"https://randomuser.me/api/portraits/med/women/27.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/27.jpg"},"nat":"GB"},{"gender":"female","name":{"title":"miss","first":"victoria","last":"sanchez"},"location":{"street":"2279 park avenue","city":"chichester","state":"lincolnshire","postcode":"LA4W 9DL","coordinates":{"latitude":"64.0177","longitude":"68.0190"},"timezone":{"offset":"-3:30","description":"Newfoundland"}},"email":"victoria.sanchez@example.com","login":{"uuid":"390b6f7b-5387-4c0d-89c6-c2690d73d573","username":"yellowzebra144","password":"fishfish","salt":"iST9nSs8","md5":"3c490821a0c285789406b873b4d8a219","sha1":"db6f42bb11c35a61dafc7ac5f91177a640d5f03f","sha256":"a053a04a418b2002c5b892203a7fe32fa8c28bed5f0da827a04f1c335fab4977"},"dob":{"date":"1988-05-17T14:10:34Z","age":30},"registered":{"date":"2003-05-17T23:00:40Z","age":15},"phone":"0110048 143 8498","cell":"0784-667-266","id":{"name":"NINO","value":"XK 77 84 65 E"},"picture":{"large":"https://randomuser.me/api/portraits/women/28.jpg","medium":"https://randomuser.me/api/portraits/med/women/28.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/28.jpg"},"nat":"GB"},{"gender":"male","name":{"title":"mr","first":"neil","last":"rhodes"},"location":{"street":"3766 grange road","city":"chichester","state":"berkshire","postcode":"G01 7EH","coordinates":{"latitude":"-51.4955","longitude":"-69.4064"},"timezone":{"offset":"+11:00","description":"Magadan, Solomon Islands, New Caledonia"}},"email":"neil.rhodes@example.com","login":{"uuid":"a1c11c7e-a111-4a88-ab6d-e3c3849f2f0e","username":"heavyzebra890","password":"flower2","salt":"Kqow7nzv","md5":"3d0f1cabdc2294b1b3d704f1bc0ddfa9","sha1":"c9c9c907b661526104729afb40d525c9a4a1e186","sha256":"d5a31a7e3ab368ece1d0a3ef7839a9f695e6dc77a5f1106b1328dba1bafca3c7"},"dob":{"date":"1946-05-16T01:27:38Z","age":72},"registered":{"date":"2015-12-30T19:40:51Z","age":2},"phone":"015394 16012","cell":"0795-994-669","id":{"name":"NINO","value":"HN 76 32 05 L"},"picture":{"large":"https://randomuser.me/api/portraits/men/50.jpg","medium":"https://randomuser.me/api/portraits/med/men/50.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/50.jpg"},"nat":"GB"},{"gender":"male","name":{"title":"mr","first":"wesley","last":"powell"},"location":{"street":"1470 church street","city":"manchester","state":"nottinghamshire","postcode":"AZ80 1WU","coordinates":{"latitude":"-35.2692","longitude":"69.9229"},"timezone":{"offset":"+9:00","description":"Tokyo, Seoul, Osaka, Sapporo, Yakutsk"}},"email":"wesley.powell@example.com","login":{"uuid":"5bc23b8b-ed97-4cb7-bfc5-c0c38e44068d","username":"greenfish615","password":"tuna","salt":"yMgh35KB","md5":"bf51466217cf43214f86fed6a2fbe02f","sha1":"2ebce4ee38ecc339482ff379a9ab0aeea4551f63","sha256":"65dbce549412407d30b42f9828180b6c88de8d9c546d146d7398346f2f55f4b9"},"dob":{"date":"1976-08-03T02:19:34Z","age":42},"registered":{"date":"2017-06-05T09:36:12Z","age":1},"phone":"0114447 094 9374","cell":"0781-395-125","id":{"name":"NINO","value":"GP 13 90 29 A"},"picture":{"large":"https://randomuser.me/api/portraits/men/54.jpg","medium":"https://randomuser.me/api/portraits/med/men/54.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/54.jpg"},"nat":"GB"}],"info":{"seed":"04e8c117a872c643","results":5,"page":1,"version":"1.2"}};

export class BaseApi {
  public static AXIOS_INSTANCE: AxiosInstance = Axios.create({});

  public static getPeople(): Promise<object> {
    return BaseApi.request({ url: 'https://randomuser.me/api/?nat=gb&results=5', method: 'GET' })
      .then((response: AxiosResponse): object => {
        return data.results.reduce((people: IPersonDTO[], currentPerson: any) => {
          const person: IPersonDTO = {
            uuid: currentPerson.login.uuid,
            name: `${currentPerson.name.first} ${currentPerson.name.last}`,
            picture: currentPerson.picture.medium,
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
