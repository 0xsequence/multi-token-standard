/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC1155MetaPackedBalance } from "../ERC1155MetaPackedBalance";

export class ERC1155MetaPackedBalance__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ERC1155MetaPackedBalance> {
    return super.deploy(overrides || {}) as Promise<ERC1155MetaPackedBalance>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155MetaPackedBalance {
    return super.attach(address) as ERC1155MetaPackedBalance;
  }
  connect(signer: Signer): ERC1155MetaPackedBalance__factory {
    return super.connect(signer) as ERC1155MetaPackedBalance__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155MetaPackedBalance {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1155MetaPackedBalance;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newNonce",
        type: "uint256",
      },
    ],
    name: "NonceChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_owners",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getIDBinIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "bin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_signer",
        type: "address",
      },
    ],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_binValues",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getValueInBin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "isOperator",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_signerAddress",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_sig",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bool",
        name: "isValid",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "bool",
        name: "_isGasFee",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "metaSafeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isGasFee",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "metaSafeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_isGasFee",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "metaSetApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50613314806100206000396000f3fe608060405234801561001057600080fd5b50600436106100e95760003560e01c8063ce0b514b1161008c578063eaec5f8111610066578063eaec5f81146101ec578063f242432a146101ff578063f5d4c82014610212578063fa4e12d714610225576100e9565b8063ce0b514b146101a5578063db90e83c146101b8578063e985e9c5146101d9576100e9565b80632eb2c2d6116100c85780632eb2c2d61461014a5780634e1273f41461015f578063a22cb4651461017f578063a3d4926e14610192576100e9565b8062fdd58e146100ee57806301ffc9a7146101175780632d0335ab14610137575b600080fd5b6101016100fc36600461274f565b610238565b60405161010e9190612d89565b60405180910390f35b61012a610125366004612859565b610280565b60405161010e9190612ac5565b610101610145366004612355565b6102e5565b61015d6101583660046124af565b610300565b005b61017261016d36600461277a565b6103bd565b60405161010e9190612a81565b61015d61018d3660046126a5565b6105d4565b61015d6101a03660046123f2565b610660565b61015d6101b33660046125d2565b6107b6565b6101cb6101c6366004612958565b61086e565b60405161010e929190612d92565b61012a6101e73660046123ba565b61087b565b6101016101fa366004612970565b6108a9565b61015d61020d36600461264a565b6108bc565b61015d610220366004612559565b610972565b61012a6102333660046126d2565b610a95565b60008060006102468461086e565b6001600160a01b038716600090815260208181526040808320858452909152902054919350915061027790826108a9565b95945050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a260000000000000000000000000000000000000000000000000000000014156102d4575060016102e0565b6102dd8261118c565b90505b919050565b6001600160a01b031660009081526002602052604090205490565b336001600160a01b038616148061031c575061031c853361087b565b6103575760405162461bcd60e51b815260040180806020018281038252603c8152602001806130c5603c913960400191505060405180910390fd5b6001600160a01b03841661039c5760405162461bcd60e51b815260040180806020018281038252603d815260200180612eb2603d913960400191505060405180910390fd5b6103a8858585856111d6565b6103b6858585855a8661153a565b5050505050565b815181516060919081146104025760405162461bcd60e51b8152600401808060200182810382526039815260200180612e796039913960400191505060405180910390fd5b6000806104228560008151811061041557fe5b602002602001015161086e565b9150915060008060008860008151811061043857fe5b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000848152602001908152602001600020549050600083905060608567ffffffffffffffff8111801561049257600080fd5b506040519080825280602002602001820160405280156104bc578160200160208202803683370190505b5090506104c983856108a9565b816000815181106104d657fe5b602090810291909101015260015b868110156105c7576104fb89828151811061041557fe5b9096509450828614158061054a575089818151811061051657fe5b60200260200101516001600160a01b03168a600183038151811061053657fe5b60200260200101516001600160a01b031614155b1561059e576000808b838151811061055e57fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008781526020019081526020016000205493508592505b6105a884866108a9565b8282815181106105b457fe5b60209081029190910101526001016104e4565b5098975050505050505050565b3360008181526001602090815260408083206001600160a01b0387168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6001600160a01b03851661068f5760405162461bcd60e51b815260040161068690612ca9565b60405180910390fd5b6060610699612193565b606061074c89857fa3d4926e8cf8fe8e020cd29f514c256bc2eec62aa2337e415f1a33a4828af5a060001b8c8c8c6040516020016106d79190612991565b604051602081830303815290604052805190602001208c6040516020016106fe9190612991565b604051602081830303815290604052805190602001208c610720576000610723565b60015b60405160200161073896959493929190612ad0565b604051602081830303815290604052611759565b905061075a898989896111d6565b841561079d57808060200190518101906107749190612923565b809450819350505061078e8989898986602001518861153a565b61079889836118da565b6107ab565b6107ab898989895a8661153a565b505050505050505050565b6001600160a01b0385166107dc5760405162461bcd60e51b815260040161068690612c4b565b60606107e6612193565b606061081e89857fce0b514b3931bdbe4d5d44e4f035afe7113767b7db71949271f6a62d9c60f558828c8c8c8c610720576000610723565b905061082c89898989611b1b565b841561086057808060200190518101906108469190612923565b809450819350505061078e89898989866020015188611b98565b6107ab898989895a86611b98565b6008810491600790911690565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b6020810282901c63ffffffff1692915050565b336001600160a01b03861614806108d857506108d8853361087b565b6109135760405162461bcd60e51b8152600401808060200182810382526037815260200180612f936037913960400191505060405180910390fd5b6001600160a01b0384166109585760405162461bcd60e51b81526004018080602001828103825260388152602001806131f46038913960400191505060405180910390fd5b61096485858585611b1b565b6103b6858585855a86611b98565b60606109ce86837ff5d4c820494c8595de274c7ff619bead38aac4fbc3d143b5bf956aa4b84fa5248289896109a85760006109ab565b60015b896109b75760006109ba565b60015b604051602001610738959493929190612b04565b6001600160a01b038781166000818152600160209081526040808320948b16808452949091529081902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168915151790555192935090917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3190610a55908890612ac5565b60405180910390a38215610a8d57610a6b612193565b81806020019051810190610a7f91906128f0565b9050610a8b87826118da565b505b505050505050565b600080825111610ad65760405162461bcd60e51b81526004018080602001828103825260438152602001806131b16043913960600191505060405180910390fd5b6001600160a01b038516610b1b5760405162461bcd60e51b81526004018080602001828103825260338152602001806131376033913960400191505060405180910390fd5b6000610b2683611d3b565b60f81c905060058110610b6a5760405162461bcd60e51b815260040180806020018281038252603a815260200180612f59603a913960400191505060405180910390fd5b60008160ff166005811115610b7b57fe5b9050600080808080856005811115610b8f57fe5b1415610bcc5760405162461bcd60e51b8152600401808060200182810382526036815260200180612fca6036913960400191505060405180910390fd5b6001856005811115610bda57fe5b1415610cf6578751606114610c205760405162461bcd60e51b815260040180806020018281038252603781526020018061308e6037913960400191505060405180910390fd5b610c2b886000611dde565b9250610c38886020611dde565b915087604081518110610c4757fe5b602001015160f81c60f81b60f81c935060018a85858560405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610cb1573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001516001600160a01b038d811691161497506111849650505050505050565b6002856005811115610d0457fe5b1415610e3a578751606114610d4a5760405162461bcd60e51b815260040180806020018281038252603781526020018061308e6037913960400191505060405180910390fd5b610d55886000611dde565b9250610d62886020611dde565b915087604081518110610d7157fe5b01602090810151604080517f19457468657265756d205369676e6564204d6573736167653a0a33320000000081850152603c8082018f905282518083039091018152605c82018084528151918601919091206000909152607c82018084525260f89290921c609c830181905260bc830187905260dc8301869052905190965060019260fc8084019391927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081019281900390910190855afa158015610cb1573d6000803e3d6000fd5b6003856005811115610e4857fe5b1415610ff357604080517f20c13b0b000000000000000000000000000000000000000000000000000000008152600481019182528a5160448201528a516001600160a01b038e16926320c13b0b928d928d92918291602482019160640190602087019080838360005b83811015610ec9578181015183820152602001610eb1565b50505050905090810190601f168015610ef65780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015610f29578181015183820152602001610f11565b50505050905090810190601f168015610f565780820380516001836020036101000a031916815260200191505b5094505050505060206040518083038186803b158015610f7557600080fd5b505afa158015610f89573d6000803e3d6000fd5b505050506040513d6020811015610f9f57600080fd5b50517fffffffff00000000000000000000000000000000000000000000000000000000167f20c13b0b0000000000000000000000000000000000000000000000000000000014965061118495505050505050565b600485600581111561100157fe5b141561114d57604080517f1626ba7e000000000000000000000000000000000000000000000000000000008152600481018c8152602482019283528a5160448301528a516001600160a01b038f1693631626ba7e938f938e9390929160640190602085019080838360005b8381101561108457818101518382015260200161106c565b50505050905090810190601f1680156110b15780820380516001836020036101000a031916815260200191505b50935050505060206040518083038186803b1580156110cf57600080fd5b505afa1580156110e3573d6000803e3d6000fd5b505050506040513d60208110156110f957600080fd5b50517fffffffff00000000000000000000000000000000000000000000000000000000167f1626ba7e0000000000000000000000000000000000000000000000000000000014965061118495505050505050565b60405162461bcd60e51b815260040180806020018281038252603a815260200180612f59603a913960400191505060405180910390fd5b949350505050565b7fffffffff0000000000000000000000000000000000000000000000000000000081167f01ffc9a70000000000000000000000000000000000000000000000000000000014919050565b8151815181146112175760405162461bcd60e51b81526004018080602001828103825260428152602001806130006042913960600191505060405180910390fd5b836001600160a01b0316856001600160a01b0316141580156112395750600081115b156113d7576000806112518560008151811061041557fe5b6001600160a01b03891660009081526020818152604080832085845290915281205487519395509193509161129c919084908890859061128d57fe5b60200260200101516001611e2c565b6001600160a01b038816600090815260208181526040808320878452909152812054875192935090916112e591908590899085906112d657fe5b60200260200101516000611e2c565b90508360015b868110156113925761130289828151811061041557fe5b9096509450818614611364576001600160a01b038b811660009081526020818152604080832086845280835281842098909855928d16825281815282822094825284815282822095909555878152948452808520549290935291909220549084905b61137584868a848151811061128d57fe5b935061138883868a84815181106112d657fe5b92506001016112eb565b50506001600160a01b03808a16600090815260208181526040808320888452825280832095909555918a1681528082528381209581529490529220919091555061145a565b60005b81811015611458578281815181106113ee57fe5b60200260200101516114138786848151811061140657fe5b6020026020010151610238565b10156114505760405162461bcd60e51b81526004018080602001828103825260368152602001806131016036913960400191505060405180910390fd5b6001016113da565b505b836001600160a01b0316856001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156114df5781810151838201526020016114c7565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561151e578181015183820152602001611506565b5050505090500194505050505060405180910390a45050505050565b61154c856001600160a01b0316611fbd565b15610a8d576000856001600160a01b031663bc197c8184338a8989886040518763ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b838110156115dd5781810151838201526020016115c5565b50505050905001848103835286818151815260200191508051906020019060200280838360005b8381101561161c578181015183820152602001611604565b50505050905001848103825285818151815260200191508051906020019080838360005b83811015611658578181015183820152602001611640565b50505050905090810190601f1680156116855780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600088803b1580156116aa57600080fd5b5087f11580156116be573d6000803e3d6000fd5b50505050506040513d60208110156116d557600080fd5b505190507fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c810000000000000000000000000000000000000000000000000000000014610a8b5760405162461bcd60e51b815260040180806020018281038252604c815260200180613042604c913960600191505060405180910390fd5b606080838060200190518101906117709190612899565b6001600160a01b0387166000908152600260205260408120549194509192509061179b836041611dde565b90508181108015906117af57508160640181105b6117cb5760405162461bcd60e51b815260040161068690612b90565b6000611807868387805190602001206040516020016117ec939291906129c7565b60405160208183030381529060405280519060200120611ff7565b90506060868387604051602001611820939291906129ee565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282526001600160a01b038c166000818152600260205292909220600187019081905590935090917fb861b7bdbe611a846ab271b8d2810391bc8b5a968f390c322438ecab66bccf599161189e91612d89565b60405180910390a26118b289838388610a95565b6118ce5760405162461bcd60e51b815260040161068690612bed565b50505050509392505050565b60006118e98260600151611d3b565b60f81c90506002811061190e5760405162461bcd60e51b815260040161068690612d2c565b60008160ff16600281111561191f57fe5b83516040850151919250600091829182916001600160a01b03161561194857866040015161194a565b335b9250600085600281111561195a57fe5b1415611a3f578660600151806020019051810190611978919061238d565b90945091506001600160a01b0384163014156119bc5761199a88848484611b1b565b6119b78884845a8560405180602001604052806000815250611b98565b611a3a565b6040517ff242432a0000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063f242432a90611a07908b90879087908790600401612a49565b600060405180830381600087803b158015611a2157600080fd5b505af1158015611a35573d6000803e3d6000fd5b505050505b611b11565b8660600151806020019051810190611a579190612371565b6040517f23b872dd0000000000000000000000000000000000000000000000000000000081529094506001600160a01b038516906323b872dd90611aa3908b9087908690600401612a25565b602060405180830381600087803b158015611abd57600080fd5b505af1158015611ad1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611af5919061283d565b611b115760405162461bcd60e51b815260040161068690612b33565b5050505050505050565b611b288483836001612126565b611b358383836000612126565b826001600160a01b0316846001600160a01b0316336001600160a01b03167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628585604051808381526020018281526020019250505060405180910390a450505050565b611baa856001600160a01b0316611fbd565b15610a8d576000856001600160a01b031663f23a6e6184338a8989886040518763ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611c3c578181015183820152602001611c24565b50505050905090810190601f168015611c695780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600088803b158015611c8c57600080fd5b5087f1158015611ca0573d6000803e3d6000fd5b50505050506040513d6020811015611cb757600080fd5b505190507fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e610000000000000000000000000000000000000000000000000000000014610a8b5760405162461bcd60e51b815260040180806020018281038252604781526020018061316a6047913960600191505060405180910390fd5b600080825111611d7c5760405162461bcd60e51b8152600401808060200182810382526037815260200180612eef6037913960400191505060405180910390fd5b81600183510381518110611d8c57fe5b016020015182517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01909252507fff000000000000000000000000000000000000000000000000000000000000001690565b60008160200183511015611e235760405162461bcd60e51b815260040180806020018281038252603c81526020018061322c603c913960400191505060405180910390fd5b50016020015190565b60006020840263ffffffff82846001811115611e4457fe5b1415611ede5784821b8701925086831015611e905760405162461bcd60e51b81526004018080602001828103825260328152602001806132ad6032913960400191505060405180910390fd5b64010000000087831c8216860110611ed95760405162461bcd60e51b81526004018080602001828103825260328152602001806132ad6032913960400191505060405180910390fd5b611fb3565b6001846001811115611eec57fe5b1415611f7c5784821b8703925086831115611f385760405162461bcd60e51b8152600401808060200182810382526033815260200180612f266033913960400191505060405180910390fd5b84818389901c161015611ed95760405162461bcd60e51b8152600401808060200182810382526033815260200180612f266033913960400191505060405180910390fd5b60405162461bcd60e51b81526004018080602001828103825260458152602001806132686045913960600191505060405180910390fd5b5050949350505050565b6000813f8015801590611ff057507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708114155b9392505050565b604080518082018252600281527f1901000000000000000000000000000000000000000000000000000000000000602080830191825283517f035aff83d86937d35b32e04f0ddc6ff469290eef2f1b692d8a815c89404d47498183015230818601528451808203860181526060820190955284519490910193909320825160009491928692608001918291908083835b602083106120c457805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101612087565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018019909216911617905292019485525083810192909252506040805180840383018152928101905281519101209392505050565b6000806121328561086e565b6001600160a01b038816600090815260208181526040808320858452909152902054919350915061216590828686611e2c565b6001600160a01b03909616600090815260208181526040808320948352939052919091209490945550505050565b6040518060800160405280600081526020016000815260200160006001600160a01b03168152602001606081525090565b600082601f8301126121d4578081fd5b81356121e76121e282612dc4565b612da0565b81815291506020808301908481018184028601820187101561220857600080fd5b60005b848110156122275781358452928201929082019060010161220b565b505050505092915050565b600082601f830112612242578081fd5b81356122506121e282612de2565b915080825283602082850101111561226757600080fd5b8060208401602084013760009082016020015292915050565b600082601f830112612290578081fd5b815161229e6121e282612de2565b91508082528360208285010111156122b557600080fd5b6122c6816020840160208601612e22565b5092915050565b6000608082840312156122de578081fd5b6040516080810167ffffffffffffffff82821081831117156122fc57fe5b8160405282935084518352602085015160208401526040850151915061232182612e52565b816040840152606085015191508082111561233b57600080fd5b5061234885828601612280565b6060830152505092915050565b600060208284031215612366578081fd5b8135611ff081612e52565b600060208284031215612382578081fd5b8151611ff081612e52565b6000806040838503121561239f578081fd5b82516123aa81612e52565b6020939093015192949293505050565b600080604083850312156123cc578182fd5b82356123d781612e52565b915060208301356123e781612e52565b809150509250929050565b60008060008060008060c0878903121561240a578182fd5b863561241581612e52565b9550602087013561242581612e52565b9450604087013567ffffffffffffffff80821115612441578384fd5b61244d8a838b016121c4565b95506060890135915080821115612462578384fd5b61246e8a838b016121c4565b94506080890135915061248082612e6a565b90925060a08801359080821115612495578283fd5b506124a289828a01612232565b9150509295509295509295565b600080600080600060a086880312156124c6578081fd5b85356124d181612e52565b945060208601356124e181612e52565b9350604086013567ffffffffffffffff808211156124fd578283fd5b61250989838a016121c4565b9450606088013591508082111561251e578283fd5b61252a89838a016121c4565b9350608088013591508082111561253f578283fd5b5061254c88828901612232565b9150509295509295909350565b600080600080600060a08688031215612570578081fd5b853561257b81612e52565b9450602086013561258b81612e52565b9350604086013561259b81612e6a565b925060608601356125ab81612e6a565b9150608086013567ffffffffffffffff8111156125c6578182fd5b61254c88828901612232565b60008060008060008060c087890312156125ea578384fd5b86356125f581612e52565b9550602087013561260581612e52565b94506040870135935060608701359250608087013561262381612e6a565b915060a087013567ffffffffffffffff81111561263e578182fd5b6124a289828a01612232565b600080600080600060a08688031215612661578283fd5b853561266c81612e52565b9450602086013561267c81612e52565b93506040860135925060608601359150608086013567ffffffffffffffff8111156125c6578182fd5b600080604083850312156126b7578182fd5b82356126c281612e52565b915060208301356123e781612e6a565b600080600080608085870312156126e7578182fd5b84356126f281612e52565b935060208501359250604085013567ffffffffffffffff80821115612715578384fd5b61272188838901612232565b93506060870135915080821115612736578283fd5b5061274387828801612232565b91505092959194509250565b60008060408385031215612761578182fd5b823561276c81612e52565b946020939093013593505050565b6000806040838503121561278c578182fd5b823567ffffffffffffffff808211156127a3578384fd5b818501915085601f8301126127b6578384fd5b81356127c46121e282612dc4565b80828252602080830192508086018a8283870289010111156127e4578889fd5b8896505b8487101561280f5780356127fb81612e52565b8452600196909601959281019281016127e8565b509096508701359350505080821115612826578283fd5b50612833858286016121c4565b9150509250929050565b60006020828403121561284e578081fd5b8151611ff081612e6a565b60006020828403121561286a578081fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114611ff0578182fd5b600080604083850312156128ab578182fd5b825167ffffffffffffffff808211156128c2578384fd5b6128ce86838701612280565b935060208501519150808211156128e3578283fd5b5061283385828601612280565b600060208284031215612901578081fd5b815167ffffffffffffffff811115612917578182fd5b611184848285016122cd565b60008060408385031215612935578182fd5b825167ffffffffffffffff8082111561294c578384fd5b6128ce868387016122cd565b600060208284031215612969578081fd5b5035919050565b60008060408385031215612982578182fd5b50508035926020909101359150565b815160009082906020808601845b838110156129bb5781518552938201939082019060010161299f565b50929695505050505050565b600084516129d9818460208901612e22565b91909101928352506020820152604001919050565b60008451612a00818460208901612e22565b82018481528351612a18816020808501908801612e22565b0160200195945050505050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b0394851681529290931660208301526040820152606081019190915260a06080820181905260009082015260c00190565b6020808252825182820181905260009190848201906040850190845b81811015612ab957835183529284019291840191600101612a9d565b50909695505050505050565b901515815260200190565b9586526001600160a01b0394851660208701529290931660408501526060840152608083019190915260a082015260c00190565b9485526001600160a01b0393841660208601529190921660408401526060830191909152608082015260a00190565b6020808252603f908201527f455243313135354d6574615061636b656442616c616e6365235f7472616e736660408201527f65724761734665653a2045524332305f5452414e534645525f4641494c454400606082015260800190565b6020808252603c908201527f455243313135354d6574615061636b656442616c616e6365235f7369676e617460408201527f75726556616c69646174696f6e3a20494e56414c49445f4e4f4e434500000000606082015260800190565b602080825260409082018190527f455243313135354d6574615061636b656442616c616e6365235f7369676e6174908201527f75726556616c69646174696f6e3a20494e56414c49445f5349474e4154555245606082015260800190565b602080825260409082018190527f455243313135354d6574615061636b656442616c616e6365236d657461536166908201527f655472616e7366657246726f6d3a20494e56414c49445f524543495049454e54606082015260800190565b60208082526045908201527f455243313135354d6574615061636b656442616c616e6365236d65746153616660408201527f6542617463685472616e7366657246726f6d3a20494e56414c49445f5245434960608201527f5049454e54000000000000000000000000000000000000000000000000000000608082015260a00190565b6020808252603b908201527f455243313135354d6574615061636b656442616c616e6365235f7472616e736660408201527f65724761734665653a20554e535550504f525445445f544f4b454e0000000000606082015260800190565b90815260200190565b918252602082015260400190565b60405181810167ffffffffffffffff81118282101715612dbc57fe5b604052919050565b600067ffffffffffffffff821115612dd857fe5b5060209081020190565b600067ffffffffffffffff821115612df657fe5b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60005b83811015612e3d578181015183820152602001612e25565b83811115612e4c576000848401525b50505050565b6001600160a01b0381168114612e6757600080fd5b50565b8015158114612e6757600080fdfe455243313135355061636b656442616c616e63652362616c616e63654f6642617463683a20494e56414c49445f41525241595f4c454e475448455243313135355061636b656442616c616e6365237361666542617463685472616e7366657246726f6d3a20494e56414c49445f524543495049454e544c6962427974657323706f704c617374427974653a20475245415445525f5448414e5f5a45524f5f4c454e4754485f5245515549524544455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a20554e444552464c4f575369676e617475726556616c696461746f7223697356616c69645369676e61747572653a20554e535550504f525445445f5349474e4154555245455243313135355061636b656442616c616e636523736166655472616e7366657246726f6d3a20494e56414c49445f4f50455241544f525369676e617475726556616c696461746f7223697356616c69645369676e61747572653a20494c4c4547414c5f5349474e4154555245455243313135355061636b656442616c616e6365235f7361666542617463685472616e7366657246726f6d3a20494e56414c49445f4152524159535f4c454e475448455243313135355061636b656442616c616e6365235f63616c6c6f6e45524331313535426174636852656365697665643a20494e56414c49445f4f4e5f524543454956455f4d4553534147455369676e617475726556616c696461746f7223697356616c69645369676e61747572653a204c454e4754485f39375f5245515549524544455243313135355061636b656442616c616e6365237361666542617463685472616e7366657246726f6d3a20494e56414c49445f4f50455241544f52455243313135355061636b656442616c616e6365235f7361666542617463685472616e7366657246726f6d3a20554e444552464c4f575369676e617475726556616c696461746f7223697356616c69645369676e61747572653a20494e56414c49445f5349474e4552455243313135355061636b656442616c616e6365235f63616c6c6f6e4552433131353552656365697665643a20494e56414c49445f4f4e5f524543454956455f4d4553534147455369676e617475726556616c696461746f7223697356616c69645369676e61747572653a204c454e4754485f475245415445525f5448414e5f305f5245515549524544455243313135355061636b656442616c616e636523736166655472616e7366657246726f6d3a20494e56414c49445f524543495049454e544c696242797465732372656164427974657333323a20475245415445525f4f525f455155414c5f544f5f33325f4c454e4754485f5245515549524544455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a20494e56414c49445f42494e5f57524954455f4f5045524154494f4e455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a204f564552464c4f57a2646970667358221220853f2f040903823e475791990c36ef0c2bf3558b33d75cb3973ec417b766d49f64736f6c63430007040033";