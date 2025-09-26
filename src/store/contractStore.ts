// store/contractStore.ts
import { create } from "zustand";

export interface Contract {
  id: string;
  documentName: string;
  type: string;
  status: string;
  uploaded: string;       // ISO date string
  lastModified: string;   // ISO date string
  owner: string;
}

interface ContractState {
  contracts: Contract[];
  contractModal: boolean;
  contractModalToggle: () => void;
  createContract: (contract: Omit<Contract, "id">) => void;
  updateContract: (id: string, updatedFields: Partial<Contract>) => void;
  deleteContract: (id: string) => void;
}

export const useContractStore = create<ContractState>((set) => ({
  contracts: [],
  contractModal: false,

  // Modal actions
  contractModalToggle: () => set((state) => ({ contractModal: !state.contractModal })),

  // Create new contract
  createContract: (contract) =>
    set((state) => ({
      contracts: [
        ...state.contracts,
        { id: crypto.randomUUID(), ...contract },
      ],
    })),

  // Update contract
  updateContract: (id, updatedFields) =>
    set((state) => ({
      contracts: state.contracts.map((contract) =>
        contract.id === id ? { ...contract, ...updatedFields } : contract
      ),
    })),

  // Delete contract
  deleteContract: (id) =>
    set((state) => ({
      contracts: state.contracts.filter((contract) => contract.id !== id),
    })),
}));
