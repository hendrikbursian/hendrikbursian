import { MetaInfo } from 'vue-meta';
import VueRouter from 'vue-router';

export interface ClientContext {
  router: VueRouter;
  head: MetaInfo;
}
