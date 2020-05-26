# reducer

reducer是用于改变state的函数

1. 一个store，有且仅有一个reducer，并且一个工程通常只有一个仓库
2. 为了方便管理，我们提供将reducer放到单独的文件中
3. reducer的调用时机
    - store.dispatch()
    - createStore()
        - 可以在createStore时不填第二个参数，在reducer中设置默认值
4. reducer内部一般使用switch来判断
5. reducer必须是一个纯函数(为了防止对象的改动)
    - 有利于测试和调试
    - 有利于还原数据
    - 有利于和react结合
6. 大中型项目数据比较复杂，需要对reducer进行细分（每一个功能的数据对应一个reducer，再合并reducer）
    - redux提供了 combineReducers 帮助我们合并reducer