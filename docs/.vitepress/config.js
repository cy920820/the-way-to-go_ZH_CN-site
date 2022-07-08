export default {
  title: '《The Way to Go》',
  description: '《The Way to Go》中文译本，中文正式名《Go 入门指南》，已开源：https://github.com/unknwon/the-way-to-go_ZH_CN ',
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  ignoreDeadLinks: true,
  themeConfig: {
    logo: '/logo.png',
    smoothScroll: true,
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // },
    nav: [
      { text: 'My site', link: 'https://www.0x403.com' },
      { text: 'Github', link: 'https://github.com/unknwon/the-way-to-go_ZH_CN' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        collapsible: true,
        collapsed: false,
        items: [
          { text: '前言', link: '/preface' },
          { text: '目录', link: '/getting-started' },
        ]
      },
      {
        text: '第一部分：学习 Go 语言',
        collapsible: true,
        collapsed: false,
        items: [
          {
            text: '第 1 章：Go 语言的起源，发展与普及',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '1.1 起源与发展', link: '/01.1' },
              { text: '1.2 语言的主要特性与发展的环境和影响因素', link: '/01.2' },
            ]
          },
          {
            text: '第 2 章：安装与运行环境',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '2.1 平台与架构', link: '/02.1' },
              { text: '2.2 Go 环境变量', link: '/02.2' },
              { text: '2.3 在 Linux 上安装 Go', link: '/02.3' },
              { text: '2.4 在 Mac OS X 上安装 Go', link: '/02.4' },
              { text: '2.5 在 Windows 上安装 Go', link: '/02.5' },
              { text: '2.6 安装目录清单', link: '/02.6' },
              { text: '2.7 Go 运行时 (runtime)', link: '/02.7' },
              { text: '2.8 Go 解释器', link: '/02.8' },
            ]
          },
          {
            text: '第 3 章：编辑器、集成开发环境与其它工具',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '3.0 编辑器、集成开发环境与其它工具', link: '/03.0' },
              { text: '3.1 Go 开发环境的基本要求', link: '/03.1' },
              { text: '3.2 编辑器和集成开发环境', link: '/03.2' },
              { text: '3.3 调试器', link: '/03.3' },
              { text: '3.4 构建并运行 Go 程序', link: '/03.4' },
              { text: '3.5 格式化代码', link: '/03.5' },
              { text: '3.6 生成代码文档', link: '/03.6' },
              { text: '3.7 其它工具', link: '/03.7' },
              { text: '3.8 Go 性能说明', link: '/03.8' },
              { text: '3.9 Go 与其它语言进行交互', link: '/03.9' },
            ]
          },
        ]
      },
      {
        text: '第二部分：语言的核心结构与技术',
        collapsible: true,
        collapsed: false,
        items: [
          { 
            text: '第 4 章：基本结构和基本数据类型',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '4.1 文件名、关键字与标识符', link: '/04.1' },
              { text: '4.2 Go 程序的基本结构和要素', link: '/04.2' },
              { text: '4.3 常量', link: '/04.3' },
              { text: '4.4 变量', link: '/04.4' },
              { text: '4.5 基本类型和运算符', link: '/04.5' },
              { text: '4.6 字符串', link: '/04.6' },
              { text: '4.7 strings 和 strconv 包', link: '/04.7' },
              { text: '4.8 时间和日期', link: '/04.8' },
              { text: '4.9 指针', link: '/04.9' },
            ]
          },
          { 
            text: '第 5 章：控制结构',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '5.0 控制结构', link: '/05.0' },
              { text: '5.1 if-else 结构', link: '/05.1' },
              { text: '5.2 测试多返回值函数的错误', link: '/05.2' },
              { text: '5.3 switch 结构', link: '/05.3' },
              { text: '5.4 for 结构', link: '/05.4' },
              { text: '5.5 Break 与 continue', link: '/05.5' },
              { text: '5.6 标签与 goto', link: '/05.6' },
            ]
          },
          { 
            text: '第 6 章：函数 (function)',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '6.0 函数 (function)', link: '/06.0' },
              { text: '6.1 介绍', link: '/06.1' },
              { text: '6.2 函数参数与返回值', link: '/06.2' },
              { text: '6.3 传递变长参数', link: '/06.3' },
              { text: '6.4 defer 和追踪', link: '/06.4' },
              { text: '6.5 内置函数', link: '/06.5' },
              { text: '6.6 递归函数', link: '/06.6' },
              { text: '6.7 将函数作为参数', link: '/06.7' },
              { text: '6.8 闭包', link: '/06.8' },
              { text: '6.9 应用闭包：将函数作为返回值', link: '/06.9' },
              { text: '6.10 使用闭包调试', link: '/06.10' },
              { text: '6.11 计算函数执行时间', link: '/06.11' },
              { text: '6.12 通过内存缓存来提升性能', link: '/06.12' },
            ]
          },
          { 
            text: '第 7 章：数组与切片',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '7.0 数组与切片', link: '/07.0' },
              { text: '7.1 声明和初始化', link: '/07.1' },
              { text: '7.2 切片', link: '/07.2' },
              { text: '7.3 For-range 结构', link: '/07.3' },
              { text: '7.4 切片重组 (reslice)', link: '/07.4' },
              { text: '7.5 切片的复制与追加', link: '/07.5' },
              { text: '7.6 字符串、数组和切片的应用', link: '/07.6' },
            ]
          },
          { 
            text: '第 8 章：Map',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '8.0 Map', link: '/08.0' },
              { text: '8.1 声明、初始化和 make', link: '/08.1' },
              { text: '8.2 测试键值对是否存在及删除元素', link: '/08.2' },
              { text: '8.3 for-range 的配套用法', link: '/08.3' },
              { text: '8.4 map 类型的切片', link: '/08.4' },
              { text: '8.5 map 的排序', link: '/08.5' },
              { text: '8.6 将 map 的键值对调', link: '/08.6' },
            ]
          },
          { 
            text: '第 9 章：包 (package)',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '9.0 包 (package)', link: '/09.0' },
              { text: '9.1 标准库概述', link: '/09.1' },
              { text: '9.2 regexp 包', link: '/09.2' },
              { text: '9.3 锁和 sync 包', link: '/09.3' },
              { text: '9.4 精密计算和 big 包', link: '/09.4' },
              { text: '9.5 自定义包和可见性', link: '/09.5' },
              { text: '9.6 为自定义包使用 godoc', link: '/09.6' },
              { text: '9.7 使用 go install 安装自定义包', link: '/09.7' },
              { text: '9.8 自定义包的目录结构、go install 和 go test', link: '/09.8' },
              { text: '9.9 通过 Git 打包和安装', link: '/09.9' },
              { text: '9.10 Go 的外部包和项目', link: '/09.10' },
              { text: '9.11 在 Go 程序中使用外部库', link: '/09.11' },
            ]
          },
          { 
            text: '第 10 章：结构 (struct) 与方法 (method)',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '10.0 结构 (struct) 与方法 (method)', link: '/10.0' },
              { text: '10.1 结构体定义', link: '/10.1' },
              { text: '10.2 使用工厂方法创建结构体实例', link: '/10.2' },
              { text: '10.3 使用自定义包中的结构体', link: '/10.3' },
              { text: '10.4 带标签的结构体', link: '/10.4' },
              { text: '10.5 匿名字段和内嵌结构体', link: '/10.5' },
              { text: '10.6 方法', link: '/10.6' },
              { text: '10.7 类型的 String() 方法和格式化描述符', link: '/10.7' },
              { text: '10.8 垃圾回收和 SetFinalizer', link: '/10.8' },
            ]
          },
          { 
            text: '第 11 章：接口 (interface) 与反射 (reflection)',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '11.0 接口 (interface) 与反射 (reflection)', link: '/11.0' },
              { text: '11.1 接口是什么', link: '/11.1' },
              { text: '11.2 接口嵌套接口', link: '/11.2' },
              { text: '11.3 类型断言：如何检测和转换接口变量的类型', link: '/11.3' },
              { text: '11.4 类型判断：type-switch', link: '/11.4' },
              { text: '11.5 测试一个值是否实现了某个接口', link: '/11.5' },
              { text: '11.6 使用方法集与接口', link: '/11.6' },
              { text: '11.7 第一个例子：使用 Sorter 接口排序', link: '/11.7' },
              { text: '11.8 第二个例子：读和写', link: '/11.8' },
              { text: '11.9 空接口', link: '/11.9' },
              { text: '11.10 反射包', link: '/11.10' },
              { text: '11.11 Printf 和反射', link: '/11.11' },
              { text: '11.12 接口与动态类型', link: '/11.12' },
              { text: '11.13 总结：Go 中的面向对象', link: '/11.13' },
              { text: '11.14 结构体、集合和高阶函数', link: '/11.14' },
            ]
          },
        ]
      },
      {
        text: '第三部分：Go 高级编程',
        collapsible: true,
        collapsed: false,
        items: [
          { 
            text: '第 12 章：读写数据',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '12.0 读写数据', link: '/12.0' },
              { text: '12.1 读取用户的输入', link: '/12.1' },
              { text: '12.2 文件读写', link: '/12.2' },
              { text: '12.3 文件拷贝', link: '/12.3' },
              { text: '12.4 从命令行读取参数', link: '/12.4' },
              { text: '12.5 用 buffer 读取文件', link: '/12.5' },
              { text: '12.6 用切片读写文件', link: '/12.6' },
              { text: '12.7 用 defer 关闭文件', link: '/12.7' },
              { text: '12.8 使用接口的实际例子：fmt.Fprintf', link: '/12.8' },
              { text: '12.9 JSON 数据格式', link: '/12.9' },
              { text: '12.10 XML 数据格式', link: '/12.10' },
              { text: '12.11 用 Gob 传输数据', link: '/12.11' },
              { text: '12.12 Go 中的密码学', link: '/12.12' },
            ]
          },
          { 
            text: '第 13 章：错误处理与测试',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '13.0 错误处理与测试', link: '/13.0' },
              { text: '13.1 错误处理', link: '/13.1' },
              { text: '13.2 运行时异常和 panic', link: '/13.2' },
              { text: '13.3 从 panic 中恢复 (recover)', link: '/13.3' },
              { text: '13.4 自定义包中的错误处理和 panicking', link: '/13.4' },
              { text: '13.5 一种用闭包处理错误的模式', link: '/13.5' },
              { text: '13.6 启动外部命令和程序', link: '/13.6' },
              { text: '13.7 Go 中的单元测试和基准测试', link: '/13.7' },
              { text: '13.8 测试的具体例子', link: '/13.8' },
              { text: '13.9 用（测试数据）表驱动测试', link: '/13.9' },
              { text: '13.10 性能调试：分析并优化 Go 程序', link: '/13.10' },
            ]
          },
          { 
            text: '第 14 章：协程 (goroutine) 与通道 (channel)',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '14.0 协程 (goroutine) 与通道 (channel)', link: '/14.0' },
              { text: '14.1 并发、并行和协程', link: '/14.1' },
              { text: '14.2 协程间的信道', link: '/14.2' },
              { text: '14.3 协程的同步：关闭通道-测试阻塞的通道', link: '/14.3' },
              { text: '14.4 使用 select 切换协程', link: '/14.4' },
              { text: '14.5 通道、超时和计时器 (Ticker)', link: '/14.5' },
              { text: '14.6 协程和恢复 (recover)', link: '/14.6' },
              { text: '14.7 新旧模型对比：任务和worker', link: '/14.7' },
              { text: '14.8 惰性生成器的实现', link: '/14.8' },
              { text: '14.9 实现 Futures 模式', link: '/14.9' },
              { text: '14.10 复用', link: '/14.10' },
              { text: '14.11 限制同时处理的请求数', link: '/14.11' },
              { text: '14.12 链式协程', link: '/14.12' },
              { text: '14.13 在多核心上并行计算', link: '/14.13' },
              { text: '14.14 并行化大量数据的计算', link: '/14.14' },
              { text: '14.15 漏桶算法', link: '/14.15' },
              { text: '14.16 对Go协程进行基准测试', link: '/14.16' },
              { text: '14.17 使用通道并发访问对象', link: '/14.17' },
            ]
          },
          { 
            text: '第 15 章：网络、模板与网页应用',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '15.0 网络、模板与网页应用', link: '/15.0' },
              { text: '15.1 tcp 服务器', link: '/15.1' },
              { text: '15.2 一个简单的 web 服务器', link: '/15.2' },
              { text: '15.3 访问并读取页面数据', link: '/15.3' },
              { text: '15.4 写一个简单的网页应用', link: '/15.4' },
              { text: '15.5 确保网页应用健壮', link: '/15.5' },
              { text: '15.6 用模板编写网页应用', link: '/15.6' },
              { text: '15.7 探索 template 包', link: '/15.7' },
              { text: '15.8 精巧的多功能网页服务器', link: '/15.8' },
              { text: '15.9 用 rpc 实现远程过程调用', link: '/15.9' },
              { text: '15.10 基于网络的通道 netchan', link: '/15.10' },
              { text: '15.11 与 websocket 通信', link: '/15.11' },
              { text: '15.12 用 smtp 发送邮件', link: '/15.12' },
            ]
          },
        ]
      },
      {
        text: '第四部分：实际应用',
        collapsible: true,
        collapsed: false,
        items: [
          { 
            text: '第 16 章：常见的陷阱与错误',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '16.0 常见的陷阱与错误', link: '/16.0' },
              { text: '16.1 误用短声明导致变量覆盖', link: '/16.1' },
              { text: '16.2 误用字符串', link: '/16.2' },
              { text: '16.3 发生错误时使用 defer 关闭一个文件', link: '/16.3' },
              { text: '16.4 何时使用 new() 和 make()', link: '/16.4' },
              { text: '16.5 不需要将一个指向切片的指针传递给函数', link: '/16.5' },
              { text: '16.6 使用指针指向接口类型', link: '/16.6' },
              { text: '16.7 使用值类型时误用指针', link: '/16.7' },
              { text: '16.8 误用协程和通道', link: '/16.8' },
              { text: '16.9 闭包和协程的使用', link: '/16.9' },
              { text: '16.10 糟糕的错误处理', link: '/16.10' },
            ]
          },
          { 
            text: '第 17 章：模式',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '17.0 模式', link: '/17.0' },
              { text: '17.1 逗号 ok 模式', link: '/17.1' },
              { text: '17.2 defer 模式', link: '/17.2' },
              { text: '17.3 可见性模式', link: '/17.3' },
              { text: '17.4 运算符模式和接口', link: '/17.4' },
            ]
          },
          { 
            text: '第 18 章：出于性能考虑的实用代码片段',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '18.0 出于性能考虑的实用代码片段', link: '/18.0' },
              { text: '18.1 字符串', link: '/18.1' },
              { text: '18.2 数组和切片', link: '/18.2' },
              { text: '18.3 映射', link: '/18.3' },
              { text: '18.4 结构体', link: '/18.4' },
              { text: '18.5 接口', link: '/18.5' },
              { text: '18.6 函数', link: '/18.6' },
              { text: '18.7 文件', link: '/18.7' },
              { text: '18.8 协程 (goroutine) 与通道 (channel)', link: '/18.8' },
              { text: '18.9 网络和网页应用', link: '/18.9' },
              { text: '18.10 其他', link: '/18.10' },
              { text: '18.11 出于性能考虑的最佳实践和建议', link: '/18.11' },
            ]
          },
          { 
            text: '第 19 章：构建一个完整的应用程序',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '19.0 构建一个完整的应用程序', link: '/19.0' },
              { text: '19.1 简介', link: '/19.1' },
              { text: '19.2 短网址项目简介', link: '/19.2' },
              { text: '19.3 数据结构', link: '/19.3' },
              { text: '19.4 用户界面：web 服务端', link: '/19.4' },
              { text: '19.5 持久化存储：gob', link: '/19.5' },
              { text: '19.6 用协程优化性能', link: '/19.6' },
              { text: '19.7 以 json 格式存储', link: '/19.7' },
              { text: '19.8 多服务器处理架构', link: '/19.8' },
              { text: '19.9 使用代理缓存', link: '/19.9' },
              { text: '19.10 总结和增强', link: '/19.10' },
            ]
          },
          { 
            text: '第 20 章：Go 语言在 Google App Engine 的使用',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '20.0 Go 语言在 Google App Engine 的使用', link: '/20.0' },
              { text: '20.1 什么是 Google App Engine？', link: '/20.1' },
              { text: '20.2 云上的 Go', link: '/20.2' },
              { text: '20.3 安装 Go App Engine SDK：为 Go 部署的开发环境', link: '/20.3' },
              { text: '20.4 建造你自己的 Hello world 应用', link: '/20.4' },
              { text: '20.5 使用用户服务和探索其 API', link: '/20.5' },
              { text: '20.6 处理窗口', link: '/20.6' },
              { text: '20.7 使用数据存储', link: '/20.7' },
              { text: '20.8 上传到云端', link: '/20.8' },
            ]
          },
          { 
            text: '第 21 章：真实世界中 Go 的使用',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '21.0 真实世界中 Go 的使用', link: '/21.0' },
              { text: '21.1 Heroku：一个使用 Go 的高度可用一致数据存储', link: '/21.1' },
              { text: '21.2 MROffice：一个使用 Go 的呼叫中心网络电话 (VOIP) 系统', link: '/21.2' },
              { text: '21.3 Atlassian：一个虚拟机群管理系统', link: '/21.3' },
              { text: '21.4 Camilistore：一个可寻址内容存储系统', link: '/21.4' },
              { text: '21.5 Go 语言的其他应用', link: '/21.5' },
            ]
          },
        ]
      },
    ]
  },

  plugins: [
    // '@vuepress/active-header-links',
    // '@vuepress/back-to-top',
    // '@vuepress/medium-zoom',
    // '@vuepress/nprogress',
  ]
}


