export class ConsultantsLogic {
    public static Instance = function(): ConsultantsLogic {
        if (this._instance) {
          return this._instance;
        } else {
          return (this._instance = new this());
        }
      };
}