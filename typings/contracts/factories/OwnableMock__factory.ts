/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { OwnableMock } from "../OwnableMock";

export class OwnableMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<OwnableMock> {
    return super.deploy(overrides || {}) as Promise<OwnableMock>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OwnableMock {
    return super.attach(address) as OwnableMock;
  }
  connect(signer: Signer): OwnableMock__factory {
    return super.connect(signer) as OwnableMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnableMock {
    return new Contract(address, _abi, signerOrProvider) as OwnableMock;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "nonOwnerCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ownerCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000600155600060025534801561001a57600080fd5b50600080546001600160a01b03191633178082556040516001600160a01b039190911691907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3610357806100736000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063776e8c30146100515780638da5cb5b1461005b578063aae7aa4b1461008c578063f2fde38b14610094575b600080fd5b6100596100c7565b005b6100636100d2565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100596100ee565b610059600480360360208110156100aa57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610168565b600280546001019055565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b60005473ffffffffffffffffffffffffffffffffffffffff16331461015e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806102fc6026913960400191505060405180910390fd5b6001805481019055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146101d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806102fc6026913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610244576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806102d2602a913960400191505060405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905556fe4f776e61626c65237472616e736665724f776e6572736869703a20494e56414c49445f414444524553534f776e61626c65236f6e6c794f776e65723a2053454e4445525f49535f4e4f545f4f574e4552a264697066735822122046bbaed4d58b988654ebaa91efd11538951f001456d33fa0ffaaea7ebb22d61a64736f6c63430007040033";