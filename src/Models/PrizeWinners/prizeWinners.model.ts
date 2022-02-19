import { serializable, alias, object, list, primitive } from "serializr";

class Laureates {
  @serializable(alias("id", primitive()))
  id?: string;
  @serializable(alias("firstname", primitive()))
  firstName?: string;
  @serializable(alias("surname", primitive()))
  surName?: string;
  @serializable(alias("motivation", primitive()))
  motivation?: string;
  @serializable(alias("share", primitive()))
  share?: string;
}
export class PrizeWinnersModel {
  @serializable(alias("year", primitive()))
  year?: string;
  @serializable(alias("category", primitive()))
  category?: string;
  @serializable(alias("laureates", list(object(Laureates))))
  laureates?: Laureates[];
}
