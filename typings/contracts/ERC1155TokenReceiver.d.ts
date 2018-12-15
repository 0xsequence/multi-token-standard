/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter } from "ethers";
import { Provider } from "ethers/providers";
import { BigNumber } from "ethers/utils";

export class ERC1155TokenReceiver extends Contract {
  functions: {
    onERC1155Received(
      _operator: string,
      _from: string,
      _types: (number | string)[],
      _amounts: (number | string)[],
      _data: (string)[]
    ): Promise<ContractTransaction>;
  };
  filters: {};
}