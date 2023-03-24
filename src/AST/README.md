#  抽象语法树

- @babel/parser

接受源码，进行词法分析、语法分析，生成AST

- @babel/traverse

接受一个AST，并对其遍历，根据preset、plugin进行逻辑处理，进行替换、删除、添加节点

- @babel/types

用于检验、构建和改变AST树的节点

- @babel/generator

接受最终生成的AST，并将其转换为代码字符串，同时此过程也可以创建source map