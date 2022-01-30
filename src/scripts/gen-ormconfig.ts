import { configProvider } from 'src/configs/config-provider';
import fs = require('fs');

fs.writeFileSync(
  'ormconfig.json',
  JSON.stringify(configProvider.getTypeOrmConfig(), null, 2),
);
