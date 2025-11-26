import { SourceAST, TargetAST } from './types';

export abstract class Visitor {
    abstract visit(node: SourceAST): TargetAST | null;
}
