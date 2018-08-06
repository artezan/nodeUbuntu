export class CustmersLogic {
    public static Instance = function(): CustmersLogic {
        if (this._instance) {
          return this._instance;
        } else {
          return (this._instance = new this());
        }
      };
}