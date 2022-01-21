export const createLogger = () => {
  let memory = [];

  function warn(message) {
    let obj = {}
    obj.message = message;
    obj.type = 'warn';
    obj.dateTime = new Date();
    memory.push(obj);
  };

  console.log(memory);
  function error(message) {
    let obj = {}
    obj.message = message;
    obj.type = 'error';
    obj.dateTime = new Date();
    memory.push(obj);
  };

  function log(message) {
    let obj = {}
    obj.message = message;
    obj.type = 'log';
    obj.dateTime = new Date();
    memory.push(obj);
  };

  function getRecords(type) {
    memory.sort((a, b) => b.dateTime.getTime() > a.dateTime.getTime());
    if (typeof type === 'undefined') {
      return memory;
    }
    
    return memory.filter(el => el.type === type); 
  };

  return {
    warn,
    error,
    log,
    getRecords,
  }
};

const logger = createLogger();
logger.error('Type');

console.log(logger.getRecords());

console.log(logger.getRecords('warn'));
