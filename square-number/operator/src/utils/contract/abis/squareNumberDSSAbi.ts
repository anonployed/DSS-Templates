export const squareNumberDssAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_aggregator', type: 'address', internalType: 'address' },
      { name: '_core', type: 'address', internalType: 'contract ICore' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'cancelSlashingHook',
    inputs: [{ name: 'operator', type: 'address', internalType: 'address' }],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'cancelUpdateStakeHook',
    inputs: [
      { name: 'operator', type: 'address', internalType: 'address' },
      { name: 'vault', type: 'address', internalType: 'address' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'finishSlashingHook',
    inputs: [{ name: 'operator', type: 'address', internalType: 'address' }],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'finishUpdateStakeHook',
    inputs: [{ name: 'operator', type: 'address', internalType: 'address' }],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'generateTaskRequest',
    inputs: [
      {
        name: 'taskRequest',
        type: 'tuple',
        internalType: 'struct SquareNumberDSS.TaskRequest',
        components: [{ name: 'value', type: 'uint256', internalType: 'uint256' }],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'getTaskResponse',
    inputs: [
      {
        name: 'taskRequest',
        type: 'tuple',
        internalType: 'struct SquareNumberDSS.TaskRequest',
        components: [{ name: 'value', type: 'uint256', internalType: 'uint256' }],
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct SquareNumberDSS.TaskResponse',
        components: [{ name: 'response', type: 'uint256', internalType: 'uint256' }],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'isOperatorRegistered',
    inputs: [{ name: 'operator', type: 'address', internalType: 'address' }],
    outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'isTaskCompleted',
    inputs: [
      {
        name: 'taskRequest',
        type: 'tuple',
        internalType: 'struct SquareNumberDSS.TaskRequest',
        components: [{ name: 'value', type: 'uint256', internalType: 'uint256' }],
      },
    ],
    outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'registerToCore',
    inputs: [{ name: 'slashablePercentage', type: 'uint256', internalType: 'uint256' }],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'registrationHook',
    inputs: [
      { name: 'operator', type: 'address', internalType: 'address' },
      { name: 'extraData', type: 'bytes', internalType: 'bytes' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'requestSlashingHook',
    inputs: [
      { name: 'operator', type: 'address', internalType: 'address' },
      { name: 'slashingPercentagesWad', type: 'uint256[]', internalType: 'uint256[]' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'requestUpdateStakeHook',
    inputs: [
      { name: 'operator', type: 'address', internalType: 'address' },
      {
        name: 'newStake',
        type: 'tuple',
        internalType: 'struct Operator.StakeUpdateRequest',
        components: [
          { name: 'vault', type: 'address', internalType: 'address' },
          { name: 'dss', type: 'address', internalType: 'contract IDSS' },
          { name: 'toStake', type: 'bool', internalType: 'bool' },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'slashOperator',
    inputs: [
      { name: 'operator', type: 'address', internalType: 'address' },
      { name: 'index', type: 'uint256', internalType: 'uint256' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'submitTaskResponse',
    inputs: [
      {
        name: 'taskRequest',
        type: 'tuple',
        internalType: 'struct SquareNumberDSS.TaskRequest',
        components: [{ name: 'value', type: 'uint256', internalType: 'uint256' }],
      },
      {
        name: 'taskResponse',
        type: 'tuple',
        internalType: 'struct SquareNumberDSS.TaskResponse',
        components: [{ name: 'response', type: 'uint256', internalType: 'uint256' }],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'supportsInterface',
    inputs: [{ name: 'interfaceID', type: 'bytes4', internalType: 'bytes4' }],
    outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    name: 'unregistrationHook',
    inputs: [
      { name: 'operator', type: 'address', internalType: 'address' },
      { name: 'extraData', type: 'bytes', internalType: 'bytes' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    name: 'TaskRequestGenerated',
    inputs: [
      { name: 'sender', type: 'address', indexed: false, internalType: 'address' },
      {
        name: 'taskRequest',
        type: 'tuple',
        indexed: false,
        internalType: 'struct SquareNumberDSS.TaskRequest',
        components: [{ name: 'value', type: 'uint256', internalType: 'uint256' }],
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'TaskResponseSubmitted',
    inputs: [
      {
        name: 'taskResponse',
        type: 'tuple',
        indexed: false,
        internalType: 'struct SquareNumberDSS.TaskResponse',
        components: [{ name: 'response', type: 'uint256', internalType: 'uint256' }],
      },
    ],
    anonymous: false,
  },
  { type: 'error', name: 'NotAggregator', inputs: [] },
  { type: 'error', name: 'OperatorAlreadyRegistered', inputs: [] },
  { type: 'error', name: 'OperatorAndIndexDontMatch', inputs: [] },
  { type: 'error', name: 'OperatorIsNotRegistered', inputs: [] },
  { type: 'error', name: 'SenderNotOperator', inputs: [] },
  { type: 'error', name: 'TaskAlreadyExists', inputs: [] },
];
