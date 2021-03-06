import type { Interface, Result } from '@ethersproject/abi';
import invariant from 'tiny-invariant';

export const parseFunctionReturn = (
  _interface: Interface,
  func: string,
  returnData: string | undefined | unknown
): Result => {
  invariant(typeof returnData === 'string', 'return data not found');
  return _interface.decodeFunctionResult(func, returnData);
};

type args = (string | number | args)[];

export const encodeFunction = (_interface: Interface, func: string, args: args): string =>
  _interface.encodeFunctionData(func, args);
