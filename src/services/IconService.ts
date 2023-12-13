import {BaseService} from "@/services/BaseService";
import {Icon} from "@/domains/Icon.d";
import {request} from "@umijs/max";
import {Result} from "@/domains/Common";

export default class IconService extends BaseService<Icon> {
  beforeAdd(): any {
  }

  getDomain(): string {
    return "icon";
  }

  public async fetchIcons(ids: string[]) {
    return request<Result<any>>(`${API_URL}/${this.getDomain()}/fetchIcons`, {
      method: 'GET',
      params: {
        ids,
      },
    });
  }

}
