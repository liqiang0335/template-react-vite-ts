type HandleFunction = (...args: any[]) => void;

/**
 * 事件总线
 */
export const createEventHub = function () {
  return {
    hub: Object.create(null),
    emit(event: string, data: any) {
      (this.hub[event] || []).forEach((handler: HandleFunction) => handler(data));
    },
    on(event: string, handler: HandleFunction) {
      if (!this.hub[event]) this.hub[event] = [];
      this.hub[event].push(handler);
    },
    off(event: string, handler: HandleFunction) {
      if (!this.hub[event]) return;
      if (!handler) {
        delete this.hub[event];
        return;
      }
      const i = (this.hub[event] || []).findIndex((h: HandleFunction) => h === handler);
      if (i > -1) this.hub[event].splice(i, 1);
    },
    clear(keys: string[]) {
      this.hub = Object.create(null);
    },
  };
};
