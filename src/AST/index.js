const parse = require("@babel/parser").parse
const traverse = require("@babel/traverse").default
const types = require("@babel/types")
const generate = require("@babel/generator").default

let code = `
let doit = ()=>{
    console.log("试试箭头函数")
}`

//【1】获取语法树
let ast = parse(code)
// console.log(JSON.stringify(ast, null, 4))

traverse(ast, {

    //【2】遍历语法树（递归子孙节点之前执行，还有exit：子孙节点遍历完后，回溯时执行）
    enter(path) {

        //【3】修改语法树（比如节点类型是ArrowFunctionExpression的话，特殊处理一下）
        if (path.type == 'ArrowFunctionExpression') {

            // 把类型从箭头函数变成普通函数
            // 当然，实际代码还需要考虑this的调整等
            path.node.type = 'FunctionExpression'

            // 或者在修改的时候借助types
            // let temp =types.identifier("var")
            // console.log(types.isIdentifier(temp)) // true
            // console.log(types.isFunction(temp)) // false

        }

    }

})

//【4】变成目标代码
const output = generate(
    ast,
    {
        /* options */
    }
)

console.log(output.code)