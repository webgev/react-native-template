import { Routes } from './routes';

export interface TabsProps
  extends Record<string, Record<string, unknown> | undefined> {
  [Routes.Tabs]: undefined | { screen: Routes | null };
}
