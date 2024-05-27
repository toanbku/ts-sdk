import { TransactionBlock } from "@mysten/sui.js";
import { ADD_LIQUIDITY_V3, FUNCTION, MODULE } from "../../constants";

export const getTxClosePositionLiquidV3 = (
  positionObjectId: string,
  inheritTx?: TransactionBlock
) => {
  const tx = inheritTx ?? new TransactionBlock();
  tx.moveCall({
    target: `${ADD_LIQUIDITY_V3.CLMM_PACKAGE}::${MODULE.POSITION_MANAGER}::${FUNCTION.CLOSE_POSITION}`,
    arguments: [
      tx.object(ADD_LIQUIDITY_V3.POSITION_REGISTRY_OBJ),
      tx.object(positionObjectId),
      tx.object(ADD_LIQUIDITY_V3.VERSIONED_OBJ),
    ],
  });
  return tx;
};
