import { Before, After } from '@cucumber/cucumber';
import { setup, teardown } from './world';

Before(async () => {
  await setup();
});

After(async () => {
  await teardown();
});