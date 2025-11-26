export interface CompilerState {
  input: string;
  output: string;
  errors: Error[];
}

export interface SourceAST {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface TargetAST {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
