// @ts-check

import klawSync from 'klaw-sync';
import winston from 'winston';

const defaultLogger = winston.createLogger();
defaultLogger.on('finish', () => {
  throw new Error('Cannot send data to log!');
});

const functions = {
  right1: (filepath, log = () => defaultLogger.end()) => {
    log();
    return klawSync(filepath, { nodir: true }).length;
  },
  wrong1: (filepath) => klawSync(filepath),
};

export default functions
