---
# 当前页面内容标题
title: go从入门到入坟
# 当前页面图标
icon: write
# 分类
category:
  - Go
# 标签
tag:
  - Go
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: false
# 是否将该文章添加至文章列表中
article: true
# 是否将该文章添加至时间线中
timeline: true
---

## Go入门

> **这是我参与「第五届青训营 」伴学笔记创作活动的第 N 天**

## 博客

mock测试：https://juejin.cn/post/7169895196824436750

单个函数测试：https://blog.csdn.net/lanyang123456/article/details/112056027

## Go基础-基础语法 | 青训营笔记

### 1. 什么是go语言

1.  高性能、高并发
0.  语法简单、学习曲线平缓
0.  丰富的标准库
0.  完善的工具链
0.  静态链接
0.  快速编译
0.  跨平台
0.  垃圾回收

### 2. 入门

#### 2.1 开发环境

[go语言下载](https://golang.google.cn/)，环境变量啥的，网上一大堆，这里就不献丑了。

- Golang(https://www.jetbrains.com/go/)
- VScode(里面下载Go插件https://code.visualstudio.com/)

#### 2.2 Hello World

> 开始大家熟悉的Hello World环节，

```go
// main包的一部分，程序的入口包(入口文件)
package main
// 导入fmt包，主要是用来往屏幕输入输出字符串、格式化字符串
import "fmt"

func main() {
    fmt.Println("Hello World")
}
```


#### 2.2 变量

> Go和Java、C一样都是强类型语言，每一个变量都有它们自己的变量类型。
>
> 但是和许多编程语言不同，它在声明变量时将变量的类型放在变量的名称之后。这样做的好处就是可以避免像C语言中那样含糊不清的声明形式，例如：`int* a, b;` 。其中只有 a 是指针而 b 不是。其中只有 a 是指针而 b 不是。如果你想要这两个变量都是指针，则需要将它们分开书写。而在 Go 中，则可以和轻松地将它们都声明为指针类型：
>
> ```go
> var a, b *int
> ```

> 变量声明也有所不同：
>
> 1. 显式声明：通过var关键字声明变量，也可以不加数据类型，系统会自行推导
>
>    ```go
>    // var 是声明变量的关键字，name 是变量名，type 是变量的类型
>    // var name type
>    var key string
>    var value int
>    
>    // 多个声明
>    var (
>    	firstName, lastName string
>        age int
>    )
>    ```
>
> 2. 隐式声明：简化显式声明，移除了var关键字
>
>    ```go
>    // name 是变量名，value 是变量的数值
>    // name := value
>    num := 100
>    name := "Tom"
>    ```
>
>    一般来说都是用隐式声明，但是隐式声明只能在函数体内使用，如果要在函数体外声明变量只能使用显式声明。

Go语言的基本类型有：

- bool
- string
- int、int8、int16、int32、int64
- uint、uint8、uint16、uint32、uint64、uintptr
- byte // uint8 的别名
- rune // int32 的别名 代表一个 Unicode 码
- float32、float64
- complex64、complex128

>当一个变量被声明之后，系统自动赋予它该类型的零值：int 为 0，float 为 0.0，bool 为 false，string 为空字符串，指针为 nil 等。**所有的内存在 Go 中都是经过初始化的。**

```go
package main

import (
    "fmt"
    "math"
)

func main() {
    // 显式声明
    var a = "initial"
    var b,c int = 1,2
    var d = true
    var e float64
    // 也可进行批量声明变量
    var (
        a = "initial"
        b,c int = 1,2
        d = true
        e float64
    )
    // 隐式声明
    f := float32(e)
    g := a + "foo"
    // Go中不允许变量不被使用，如果你定义了不使用会报错
    fmt.Println(a,b,c,d,e,f)// initial 1 2 true 0 0
    fmt.Printf(g)// initialfoo
    // Go中的常量就是把var改成constant，没有特定的类型，而是根据使用的上下文来自动确定类型
    const s string = "JMjiumu" 
    const h = 500000000
    const i = 3e20/h
    fmt.Println(s,h,i,math.Sin(h),math.Sin(i))
    // JMjiumu 500000000 6e+11 -0.28470407323754404 0.7591864109375384
}
```

#### 2.3 if-else

> 和C、C++差不多，不过if后面不需要小括号，如果加了保存时会自动帮你删除，并且if后的语句块必须要加大括号，不加编译都会出错。
>
> 在判断语句前还可以添加一些简单的执行语句。

```go
// 小括号
if (7%2 == 0) {...}❌哒咩哒咩
if 7%2 == 0 {...}✅
// 大括号
if 7%2 == 0 fmt.Println("hhh") ❌哒咩呦
if 7%2 == 0 {✅
    fmt.Println("hhh")
}
```

```go
package main

import "fmt"

func main() {
    if 7%2 == 0 {
        fmt.Println("7 is even")
    } else {
        fmt.Println("7 is odd")
    }
    // 执行简单语句
    if num := 9; num < 0 {
        fmt.Println(num, "is negative")
    } else if num < 10 {
        fmt.Println(num, "has 1 digit")
    } else {
        fmt.Println(num, "has multiple digits")
    }
}
```

#### 2.4 循环

> Go语言中没有while循环，没有do-while循环，只有for循环，同样不用加小括号，其余和C、C++等基本相同，可以用break跳出，continue继续循环等等操作。

```go
package main

import "fmt"

func main() {
    i := 1
    // 相当于while条件为true，死循环
    for {
        fmt.Println("loop")
        break
    }
    for j := 7; j < 9; j++ {
        fmt.Println(j)
    }

    for n := 0; n < 5; n++ {
        if n%2 == 0 {
            continue
        }
        fmt.Println(n)
    }
    for i <= 3 {
        fmt.Println(i)
        i = i + 1
    }
}
```

#### 2.5 switch

> 1. switch没有break不会继续往后执行，而是找到目标后直接会进行退出
> 2. switch后面可以使用任意的变量类型（字符串、结构体），甚至可以取代任何if-else语句，也可以不加如何变量，在case里写条件分支，这样比用多个if-else逻辑会更加清晰

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    a := 5
    switch a {
        case 1:
        fmt.Println("学Go的第1天...")
        case 5:
        fmt.Println("学Go的第5天...")
        case 10:
        fmt.Println("学Go的第10天...")
        case 15, 20:
        fmt.Println("...")
        default:
        fmt.Println("学个锤子，不学了🥳")
    }

    t := time.Now()
    switch {
        case t.Hour() < 12:
        fmt.Println("It's before noon")
        default:
        fmt.Println("It's after noon")
    }
}
```

#### 2.6 数组

> 数组和其他语言大体相同，但是在真实业务代码里面，我们很少直接使用数组，因为它长度是固定的，我们用的更多的是切片

```go
package main

import "fmt"

func main() {
    var a [5]int
    a[4] = 100
    fmt.Println(a[2], a[4], len(a))// 0 100 5

    b := [5]int{1, 2, 3, 4, 5}
    fmt.Println(b)// [1 2 3 4 5]

    var twoD [2][3]int
    for i := 0; i < 2; i++ {
        for j := 0; j < 3; j++ {
            twoD[i][j] = i + j
        }
    }
    fmt.Println(twoD)// [[0 1 2] [1 2 3]]有一说一，没有逗号看得有点不习惯😂
}
```

#### 2.7 切片

>切片不同于数组可以任意更改长度，也有更多丰富的操作，有点像Python的切片。
>
>slice的实际上是一个数组存储了一个长度和一个容量，加一个指向一个数组的指针，Go 支持切片运算符 `s[i:p]`，其中：
>
>- `s` 表示数组。
>- `i` 表示指向要添加到新切片的基础数组（或另一个切片）的第一个元素的指针。 变量 `i` 对应于数组 `array[i]` 中索引位置 `i` 处的元素。 请记住，此元素不一定是基础数组的第一个元素 `array[0]`。
>- `p` 表示创建新切片时要使用的基础数组中的元素数目。 变量 `p` 对应于可用于新切片的基础数组中的最后一个元素。 可在位置 `array[i+1]` 找到基础数组中位置 `p` 处的元素。 请注意，此元素不一定是基础数组的最后一个元素 `array[len(array)-1]`。
>
>切片容量是`p - i`，但是切片长度是`len(s) - i`，不要忘记`i`是指针，`p`只是显示的末尾而已，实际上的末尾是数组的最后一个位置。
>
>切片可以通过内置函数`make()`来创建，也可以像数组一样创建：
>
>```go
>// name为变量名，type为数据类型，len为切片长度，cap为切片容量
>name = make([]type, len, cap)
>var name []int = arr[2:3]
>name := []int{1, 2, 3}
>```
>
>切片也可以通过内置函数`append()`来动态地增加元素
>
>```go
>slice := []int{1, 2, 3}
>slice = append(slice, 4, 5)
>// slice[1 2 3 4 5]
>```

```go
package main

import "fmt"

func main() {
    // 使用make创建切片
    s := make([]string, 3)
    s[0] = "a"
    s[1] = "b"
    s[2] = "c"
    fmt.Println("get:", s[2])   // c
    fmt.Println("len:", len(s)) // 3
    // 添加元素
    s = append(s, "d")
    s = append(s, "e", "f")
    fmt.Println(s) // [a b c d e f]
    // 创建切片
    c := make([]string, len(s))
    copy(c, s)
    fmt.Println(c) // [a b c d e f]
    // 将s从2切到5
    fmt.Println(s[2:5]) // [c d e]
    // :前没有数值默认从0开始
    fmt.Println(s[:5])  // [a b c d e]
    // :后没有数值默认到最后一位
    fmt.Println(s[2:])  // [c d e f]
    // 像创建数组一样创建切片，此时可以看做是数组
    good := []string{"g", "o", "o", "d"}
    fmt.Println(good) // [g o o d]
}
```

#### 2.8 map

>map（映射）在其他编程语言里面，它可能可以叫做哈希或者字典，map是实际使用过程中最频繁用到的数据结构。
>
>同样是使用`make`进行创建：
>
>```go
>// 第一个类型为key的类型，第二个为value的类型
>temp := make(map[string]int)
>```
>
>我们可以从里面去存储或者取出键值对。可以用delete 从里面删除键值对：
>
>```go
>temp := make(map[string]int)
>// 添加，直接添加
>temp["九牧", 20]
>temp["Tom", 666]
>// 删除，使用delete函数
>delete(temp, "Tom")
>```
>
>golang的map是完全无序的，遍历的时候不会按照字母顺序，也不会按照插入顺序输出，而是随机顺序。

```go
package main

import "fmt"

func main() {
    m := make(map[string]int)
    m["one"] = 1
    m["two"] = 2
    fmt.Println(m)           // map[one:1 two:2]
    fmt.Println(len(m))      // 2
    fmt.Println(m["one"])    // 1
    fmt.Println(m["unknow"]) // 0

    r, ok := m["unknow"]
    fmt.Println(r, ok) // 0 false

    delete(m, "one")

    m2 := map[string]int{"one": 1, "two": 2}
    var m3 = map[string]int{"one": 1, "two": 2}
    fmt.Println(m2, m3)
}
```

#### 2.9 range

>对于一个slice或者一个map的话，可以用range来快速追历，这样代码能够更加简洁。range遍历的时候，对于数组会返回两个值。第一个是索引，第二个是对应位置的值。如果我们不需要索引的话，我们可以用下划线来忽略。

```go
package main

import "fmt"

func main() {
    nums := []int{2, 3, 4}
    sum := 0
    for i, num := range nums {
        sum += num
        if num == 2 {
            fmt.Println("index:", i, "num:", num) // index: 0 num: 2
        }
    }
    fmt.Println(sum) // 9

    m := map[string]string{"a": "A", "b": "B"}
    for k, v := range m {
        fmt.Println(k, v) // b 8; a A
    }
    for k := range m {
        fmt.Println("key", k) // key a; key b
    }
}
```

#### 2.10 函数

>这个是Golang里面一个简单的实现两个变量相加的函数。Golang和其他很多语言不一样的是，变星类型是后置的。
>
>Golang里面的函数原生支持返回多个值。在实际的业务逻辑代码里面几乎所有的函数都返回两个值，第一个是真正的返回结果，第二个值是一个错误信息。

```go
package main

import "fmt"

func add(a int, b int) int {
    return a + b
}

func add2(a, b int) int {
    return a + b
}

func exists(m map[string]string, k string) (v string, ok bool) {
    v, ok = m[k]
    return v, ok
}

func main() {
    res := add(1, 2)
    fmt.Println(res) // 3

    v, ok := exists(map[string]string{"a": "A"}, "a")
    fmt.Println(v, ok) // A True
}
```

#### 2.11 指针

>go里面也支持指针。当然，相比C和C++里面的指针，支持的操作很有限。指针的一个主要用途就是对于传入参数进行修改。
>
>这个函数试图把一个变量+2，但是单纯像上面这种写法其实是无救的，因为传入函数的参数实际上是一个拷贝，那也说这个+2，是对那个拷贝进行了+2，并不起作用。如果我们需要起作用的话，那么我们需要把那个类型写成指针类型，那么为了类型匹配，调用的时候会加一个&符号。

```go
package main

import "fmt"

func add2(n int) {
    n += 2
}

func add2ptr(n *int) {
    *n += 2
}

func main() {
    n := 5
    add2(n)
    fmt.Println(n) // 5
    add2ptr(&n)
    fmt.Println(n) // 7
}
```

#### 2.12 结构体

>结构体的话是带类型的字段的集合，比加这里user结构包含了两个字段,，name和password，我们可以用结构体的名称去初始化一个结构体变量，构造的时候需要传入每个字段的初始值。也可以用这种键值对的方式去指定初始值，这种可以只对一部份字段进行初始化。同样的结构体我们也能支持指针，这样能够实现对于结构体的修改，也可以在某些情况下避免一些大结构体的拷贝开销。

```go
package main

import "fmt"

type user struct {
    name     string
    password string
}

func main() {
    a := user{name: "wang", password: "1024"}
    b := user{"wang", "1024"}
    c := user{name: "wang"}
    c.password = "1024"
    var d user
    d.name = "wang"
    d.password = "1024"

    fmt.Println(a, b, c, d)                 // {wang 1024} {wang 1024} {wang 1024} {wang 1024}
    fmt.Println(checkPassword(a, "haha"))   // false
    fmt.Println(checkPassword2(&a, "haha")) // false
}

func checkPassword(u user, password string) bool {
    return u.password == password
}

func checkPassword2(u *user, password string) bool {
    return u.password == password
}
```

#### 2.13 结构体方法

>在Golang里面可以为结构体去定义一些方法。会有一点类似其他语言里面的类成员函数。

```go
package main

import "fmt"

type user struct {
    name     string
    password string
}

func (u user) checkPassword(password string) bool {
    return u.password == password
}

func (u *user) resetPassword(password string) {
    u.password = password
}

func main() {
    a := user{name: "wang", password: "1024"}
    a.resetPassword("2048")
    fmt.Println(a.checkPassword("2048")) // true
}
```

#### 2.14 错误处理

#### 2.15 字符串操作

> 其实下面都看得懂的，和其他语言都很相似

```go
package main

import (
    "fmt"
    "strings"
)

func main() {
    a := "hello"
    fmt.Println(strings.Contains(a, "ll"))                // true
    fmt.Println(strings.Count(a, "l"))                    // 2
    fmt.Println(strings.HasPrefix(a, "he"))               // true
    fmt.Println(strings.HasSuffix(a, "llo"))              // true
    fmt.Println(strings.Index(a, "ll"))                   // 2
    fmt.Println(strings.Join([]string{"he", "llo"}, "-")) // he-llo
    fmt.Println(strings.Repeat(a, 2))                     // hellohello
    fmt.Println(strings.Replace(a, "e", "E", -1))         // hEllo
    fmt.Println(strings.Split("a-b-c", "-"))              // [a b c]
    fmt.Println(strings.ToLower(a))                       // hello
    fmt.Println(strings.ToUpper(a))                       // HELLO
    fmt.Println(len(a))                                   // 5
    b := "你好"
    fmt.Println(len(b)) // 6
}
```

#### 2.16 字符串格式化

>%v来打印任意类型的变量，可以用%+v打印详细结果，%#v则更详细

```go
package main

import "fmt"

type point struct {
    x, y int
}

func main() {
    s := "hello"
    n := 123
    p := point{1, 2}
    fmt.Println(s, n) // hello 123
    fmt.Println(p)    // {1 2}

    fmt.Printf("s=%v\n", s)  // s=hello
    fmt.Printf("n=%v\n", n)  // n=123
    fmt.Printf("p=%v\n", p)  // p={1 2}
    fmt.Printf("p=%+v\n", p) // p={x:1 y:2}
    fmt.Printf("p=%#v\n", p) // p=main.point{x:1, y:2}

    f := 3.141592653
    fmt.Println(f)          // 3.141592653
    fmt.Printf("%.2f\n", f) // 3.14
}
```

#### 2.17 JSON处理

>可以使用`json.Marshal`函数将字段进行序列化，序列化之后的字符串也能够用`JSON.unmarshaler`去反序列化到一个空的变量里面

```go
package main

import (
	"encoding/json"
	"fmt"
)

type userInfo struct {
	Name  string
	Age   int `json:"age"`
	Hobby []string
}

func main() {
	a := userInfo{Name: "wang", Age: 18, Hobby: []string{"Golang", "TypeScript"}}
	buf, err := json.Marshal(a)
	if err != nil {
		panic(err)
	}
	fmt.Println(buf)         // [123 34 78 97...]
	fmt.Println(string(buf)) // {"Name":"wang","age":18,"Hobby":["Golang","TypeScript"]}

	buf, err = json.MarshalIndent(a, "", "\t")
	if err != nil {
		panic(err)
	}
	fmt.Println(string(buf))

	var b userInfo
	err = json.Unmarshal(buf, &b)
	if err != nil {
		panic(err)
	}
	fmt.Printf("%#v\n", b) // main.userInfo{Name:"wang", Age:18, Hobby:[]string{"Golang", "TypeScript"}}
}
```

#### 2.18 时间处理

> Go里基本上都是使用time来处理时间有关操作，有非常多有关时间的方法，得到的时间都是时间戳，也就是以纳秒为单位的。

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    now := time.Now()
    fmt.Println(now) // 2022-03-27 18:04:59.433297 +0800 CST m=+0.000087933
    t := time.Date(2022, 3, 27, 1, 25, 36, 0, time.UTC)
    t2 := time.Date(2022, 3, 27, 2, 30, 36, 0, time.UTC)
    fmt.Println(t)                                                  // 2022-03-27 01:25:36 +0000 UTC
    fmt.Println(t.Year(), t.Month(), t.Day(), t.Hour(), t.Minute()) // 2022 March 27 1 25
    fmt.Println(t.Format("2006-01-02 15:04:05"))                    // 2022-03-27 01:25:36
    diff := t2.Sub(t)
    fmt.Println(diff)                           // 1h5m0s
    fmt.Println(diff.Minutes(), diff.Seconds()) // 65 3900
    t3, err := time.Parse("2006-01-02 15:04:05", "2022-03-27 01:25:36")
    if err != nil {
        panic(err)
    }
    fmt.Println(t3 == t)    // true
    fmt.Println(now.Unix()) // 1648738080
}
```

#### 2.19 数字解析

>有关字符串与数字之间转换就要用到`strconv`包了，它提供了许多函数来实现字符串和整数、浮点数、布尔值之间的转换

```go
package main

import (
    "fmt"
    "strconv"
)

func main() {
    f, _ := strconv.ParseFloat("1.234", 64)
    fmt.Println(f) // 1.234

    n, _ := strconv.ParseInt("111", 10, 64)
    fmt.Println(n) // 111

    n, _ = strconv.ParseInt("0x1000", 0, 64)
    fmt.Println(n) // 4096

    n2, _ := strconv.Atoi("123")
    fmt.Println(n2) // 123

    n2, err := strconv.Atoi("AAA")
    fmt.Println(n2, err) // 0 strconv.Atoi: parsing "AAA": invalid syntax
}
```

#### 2.20 进程信息

```go
package main

import (
    "fmt"
    "os"
    "os/exec"
)

func main() {
    // go run example/20-env/main.go a b c d
    fmt.Println(os.Args)           // [/var/folders/8p/n34xxfnx38dg8bv_x8l62t_m0000gn/T/go-build3406981276/b001/exe/main a b c d]
    fmt.Println(os.Getenv("PATH")) // /usr/local/go/bin...
    fmt.Println(os.Setenv("AA", "BB"))

    buf, err := exec.Command("grep", "127.0.0.1", "/etc/hosts").CombinedOutput()
    if err != nil {
        panic(err)
    }
    fmt.Println(string(buf)) // 127.0.0.1       localhost
}
```

### 3. 项目实战

#### 3.1 猜谜游戏

>在这个游戏里面，程序首先会生成一个介于1到100之间的随机整数，然后提示玩家进行猜测。玩家每次输入一个数字，程序会告诉玩家这个猜测的值是高于还是低于那个秘密的随机数，并且让玩家再次猜测。如果猜对了，就告诉玩家胜利并且退出程序。

##### 3.1.1 生成随机数

> `math/rand`是 Go 语言中专门用来做与随机数相关操作的包，主要有生成随机数、随机种子等方法
>
> - `rand.Intn(n)`生成一个值在 [0, n) 区间的随机整数
> - `rand.Seed(seed)`以设置随机种子，seed 为 `int64` 类型
>
> `time.Now().UnixNano()`是获取当前时间的时间戳（以纳秒为单位）

```go
package main

import (
    "fmt"
    "math/rand"
)

func main() {
    // 规定随机数的最大区间范围
    maxNum := 100
    // 随机生成[0, maxNum)区间中的一个整数
    secretNumber := rand.Intn(maxNum)
    // 打印该随机数字
    fmt.Println("The secret number is ", secretNumber)
    // 但是如果你多执行几次，会发现一直都是81这个数字，why？因为我们没有设置随机数种子
    // 使用math/rand之前需要设置随机数种子，否则的话每一次都会生成相同的随机数序列。
    // 一般惯例用法是在程序启动的时候，用启动的时间戳来初始化随机数种子。
}
```

```go
package main

import (
    "fmt"
    "math/rand"
    "time"
)

func main() {
    // 规定随机数的最大区间范围
    maxNum := 100
    // 设置随机数种子，将种子设置为当前时间戳
    rand.Seed(time.Now().UnixNano())
    // 随机生成[0, maxNum)区间中的一个整数
    secretNumber := rand.Intn(maxNum)
    // 打印该随机数字
    fmt.Println("The secret number is ", secretNumber)
    // 多执行几次，就不再会是同一个数字了
}
```

##### 3.1.2 读取用户输入

>

```go
package main

import (
    "bufio"
    "fmt"
    "math/rand"
    "os"
    "strconv"
    "strings"
    "time"
)

func main() {
    // ------系统生成随机数部分-----
    maxNum := 100
    rand.Seed(time.Now().UnixNano())
    secretNumber := rand.Intn(maxNum)
    fmt.Println("The secret number is ", secretNumber)
    // ------读取用户输入部分--------
    // 提示用户输入猜测数字
    fmt.Println("Please input your guess")
    reader := bufio.NewReader(os.Stdin)
    // 进行错误处理
    input, err := reader.ReadString('\n')
    // 如果err不为空，那么就说明执行过程中返回了错误信息，那就直接打印出来
    if err != nil {
        fmt.Println("An error occured while reading input. Please try again", err)
        return
    }
    // 去掉换行符，将字符串首尾的 \r 和 \n 去掉
    input = strings.Trim(input, "\r\n")
    // 将input转化为数字
    guess, err := strconv.Atoi(input)
    // 进行错误处理
    if err != nil {
        // 打印错误信息
        fmt.Println("Invalid input. Please enter an integer value")
        return
    }
    // 输出用户输入数字
    fmt.Println("You guess is", guess)
}
```

##### 3.1.3 实现判断逻辑

> 就多加了一个if大小判断

```go
package main

import (
    "bufio"
    "fmt"
    "math/rand"
    "os"
    "strconv"
    "strings"
    "time"
)

func main() {
    // 这里都是3.1.2中的代码
    // 下面是实现判断逻辑的代码
    // 将用户猜测数字与系统生成的随机数进行对比
    if guess > secretNumber {
        // 如果用户猜测较大，提示用户随机数应该较小一些
        fmt.Println("Your guess is bigger than the secret number. Please try again")
    } else if guess < secretNumber {
         // 如果用户猜测较小，提示用户随机数应该较大一些
        fmt.Println("Your guess is smaller than the secret number. Please try again")
    } else {
        // 最后剩下的情况就只有两者相等，这时直接输出结果即可
        fmt.Println("Correct, you Legend!")
    }
}
```

##### 3.1.4 实现游戏循环

```go
package main

import (
    "bufio"
    "fmt"
    "math/rand"
    "os"
    "strconv"
    "strings"
    "time"
)

func main() {
    //-------系统生成随机数--------
    maxNum := 100
    rand.Seed(time.Now().UnixNano())
    secretNumber := rand.Intn(maxNum)
    // fmt.Println("The secret number is ", secretNumber)
    // ------读取用户输入部分-------
    fmt.Println("Please input your guess")
    reader := bufio.NewReader(os.Stdin)
    // 这里for不加任何东西就相当于while循环，且是while(true)死循环
    // 将之前所说的所有操作整合到下述for循环中
    for {
        input, err := reader.ReadString('\n')
        if err != nil {
            fmt.Println("An error occured while reading input. Please try again", err)
            // 将break换成了continue，因为考虑到break会终止for循环的，只需要跳过本次循环就行了
            continue
        }
        input = strings.Trim(input, "\r\n")

        guess, err := strconv.Atoi(input)
        if err != nil {
            fmt.Println("Invalid input. Please enter an integer value")
            continue
        }
        fmt.Println("You guess is", guess)
        if guess > secretNumber {
            fmt.Println("Your guess is bigger than the secret number. Please try again")
        } else if guess < secretNumber {
            fmt.Println("Your guess is smaller than the secret number. Please try again")
        } else {
            fmt.Println("Correct, you Legend!")
            break
        }
    }
}
```

#### 3.2 在线词典

> 用户在命令行里面查询一个单词，通过调用第三方的 API 查询到单词的翻译并打印出来，在这个项目中我们将学会如何使用 Go 语言来发送 HTTP 请求、解析 JSON，还会学习如何使用代码生成来提高开发效率。

##### 3.2.1 抓包

> 以彩云科技提供的在线翻译为例，直接右键检查打开浏览器的开发者工具（这个应该都懂吧）。
>
> ![image-20230119163401893](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230119163401893.png)
>
> 这是 HTTP 的一个 post 请求，API 的返回结果里会有 dictionary 和 wiki 两个字段，我们想要的数据就在 dictionary.explanations 字段里，其他字典还包括该单词的其他信息，例如音标。。。
>
> 右键 dict，以 cURL 格式进行复制，在命令行粘贴出来，应该可以看到一大串的 json
>
> ```bash
>  curl 'https://api.interpreter.caiyunai.com/v1/dict' \
>   -H 'authority: api.interpreter.caiyunai.com' \
>   -H 'sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"' \
>   -H 'os-version: ' \
>   -H 'sec-ch-ua-mobile: ?0' \
>   -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36' \
>   -H 'app-name: xy' \
>   -H 'content-type: application/json;charset=UTF-8' \
>   -H 'accept: application/json, text/plain, */*' \
>   -H 'device-id: ' \
>   -H 'os-type: web' \
>   -H 'x-authorization: token:qgemv4jr1y38jyq6vhvi' \
>   -H 'sec-ch-ua-platform: "Windows"' \
>   -H 'origin: https://fanyi.caiyunapp.com' \
>   -H 'sec-fetch-site: cross-site' \
>   -H 'sec-fetch-mode: cors' \
>   -H 'sec-fetch-dest: empty' \
>   -H 'referer: https://fanyi.caiyunapp.com/' \
>   -H 'accept-language: zh-CN,zh;q=0.9,zh-TW;q=0.8' \
>   --data-raw '{"trans_type":"en2zh","source":"good"}' \
>   --compressed
> ```

##### 3.2.2 代码生成

>这里要用到一个在线代码自动生成的网站https://curlconverter.com/go/，添加 curl 命令，自动生成相应命令操作的 go 代码，很大地提高了开发效率。

```go
// 将上面的curl代码通过代码生成网站转化为的go代码
package main

import (
    "fmt"
    "io/ioutil"
    "log"
    "net/http"
    "strings"
)

func main() {
    // 创建HTTP client，可以指定很多参数，例如请求超时是否使用cookie。。。
    client := &http.Client{}
    // 构造HTTP请求的请求体，自定义相关参数
    // trans_type: 翻译方式，en2zh：英语翻译为中文
    // source: 想要查询的单词
    var data = strings.NewReader(`{"trans_type":"en2zh","source":"good"}`)
    // 构造一个HTTP请求，并且的post请求，https://api.interpreter.caiyunai.com/v1/dict为发送请求的url
    req, err := http.NewRequest("POST", "https://api.interpreter.caiyunai.com/v1/dict", data)
    // 错误处理，请求无异常err为nil，如果中途出现问题，err为返回错误信息
    if err != nil {
        // 直接返回错误信息并结束程序
        log.Fatal(err)
    }
    // 设置请求体中的一大堆参数
    req.Header.Set("authority", "api.interpreter.caiyunai.com")
    req.Header.Set("sec-ch-ua", `" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"`)
    req.Header.Set("sec-ch-ua-mobile", "?0")
    req.Header.Set("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36")
    req.Header.Set("app-name", "xy")
    req.Header.Set("content-type", "application/json;charset=UTF-8")
    req.Header.Set("accept", "application/json, text/plain, */*")
    req.Header.Set("os-type", "web")
    req.Header.Set("x-authorization", "token:qgemv4jr1y38jyq6vhvi")
    req.Header.Set("sec-ch-ua-platform", `"Windows"`)
    req.Header.Set("origin", "https://fanyi.caiyunapp.com")
    req.Header.Set("sec-fetch-site", "cross-site")
    req.Header.Set("sec-fetch-mode", "cors")
    req.Header.Set("sec-fetch-dest", "empty")
    req.Header.Set("referer", "https://fanyi.caiyunapp.com/")
    req.Header.Set("accept-language", "zh-CN,zh;q=0.9,zh-TW;q=0.8")
    // 发送请求
    resp, err := client.Do(req)
    // 错误处理，判断请求是否发送成功并且服务器响应
    if err != nil {
        // 如果出现问题，打印错误信息并结束程序
        log.Fatal(err)
    }
    // 关闭client，释放资源
    defer resp.Body.Close()
    // 读取服务器的响应结果
    bodyText, err := ioutil.ReadAll(resp.Body)
    // 错误处理
    if err != nil {
        log.Fatal(err)
    }
    // 打印出服务器的响应结果，也就是输入单词的中文翻译
    fmt.Printf("%s\n", bodyText)
}
```

```json
// 格式化后的bodyText
{
    "rc": 0,
    "wiki": {
        "known_in_laguages": 63,
        "description": {
            "source": "tangible and intangible thing, except labor tied services, that satisfies human wants and provides utility",
            "target": null
        },
        "id": "Q28877",
        "item": {
            "source": "good",
            "target": "\u5546\u54c1"
        },
        "image_url": "http://www.caiyunapp.com/imgs/link_default_img.png",
        "is_subject": "true",
        "sitelink": "https://www.caiyunapp.com/read_mode/?id=6354777915466339550246c5"
    },
    "dictionary": {
        "prons": {
            "en-us": "[g\u028ad]",
            "en": "[gud]"
        },
        "explanations": ["a.\u597d\u7684;\u5584\u826f\u7684;\u5feb\u4e50\u7684;\u771f\u6b63\u7684;\u5bbd\u5927\u7684;\u6709\u76ca\u7684;\u8001\u7ec3\u7684;\u5e78\u798f\u7684;\u5fe0\u5b9e\u7684;\u4f18\u79c0\u7684;\u5b8c\u6574\u7684;\u5f7b\u5e95\u7684;\u4e30\u5bcc\u7684", "n.\u5229\u76ca;\u597d\u5904;\u5584\u826f;\u597d\u4eba", "ad.=well"],
        "synonym": ["excellent", "fine", "nice", "splendid", "proper"],
        "antonym": ["bad", "wrong", "evil", "harmful", "poor"],
        "wqx_example": [
            ["to the good", "\u6709\u5229,\u6709\u597d\u5904"],
            ["good, bad and indifferent", "\u597d\u7684,\u574f\u7684\u548c\u4e00\u822c\u7684"],
            ["good innings", "\u957f\u5bff"],
            ["good and ...", "\u5f88,\u9887;\u5b8c\u5168,\u5f7b\u5e95"],
            ["do somebody's heart good", "\u5bf9\u67d0\u4eba\u7684\u5fc3\u810f\u6709\u76ca,\u4f7f\u67d0\u4eba\u611f\u5230\u6109\u5feb"],
            ["do somebody good", "\u5bf9\u67d0\u4eba\u6709\u76ca"],
            ["be good for", "\u5bf9\u2026\u6709\u6548,\u9002\u5408,\u80dc\u4efb"],
            ["be good at", "\u5728\u2026\u65b9\u9762(\u5b66\u5f97,\u505a\u5f97)\u597d;\u5584\u4e8e"],
            ["as good as one's word", "\u4fe1\u5b88\u8bfa\u8a00,\u503c\u5f97\u4fe1\u8d56"],
            ["as good as", "\u5b9e\u9645\u4e0a,\u51e0\u4e4e\u7b49\u4e8e"],
            ["all well and good", "\u4e5f\u597d,\u8fd8\u597d,\u5f88\u4e0d\u9519"],
            ["a good", "\u76f8\u5f53,\u8db3\u8db3"],
            ["He is good at figures . ", "\u4ed6\u5584\u4e8e\u8ba1\u7b97\u3002"]
        ],
        "entry": "good",
        "type": "word",
        "related": [],
        "source": "wenquxing"
    }
}
```

##### 3.2.3 生成 request body

>我们需要生成一段 JSON，常用的方式是我们先构造出来一个结构体，这个结构体和我们需要生成的JSON 的结构是——对应的

```go
package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io/ioutil"
    "log"
    "net/http"
)
// 创建构造体，类型后的`json:name`是JSON序列化后的名称
type DictRequest struct {
    TransType string `json:"trans_type"`
    Source    string `json:"source"`
    UserID    string `json:"user_id"`
}

func main() {
    client := &http.Client{}
    // 初始化请求结构体
    request := DictRequest{TransType: "en2zh", Source: "good"}
    // 使用json.Marshal得到结构体序列化后的字符串
    buf, err := json.Marshal(request)
    if err != nil {
        log.Fatal(err)
    }
    var data = bytes.NewReader(buf)
    req, err := http.NewRequest("POST", "https://api.interpreter.caiyunai.com/v1/dict", data)
    if err != nil {
        log.Fatal(err)
    }
    // 后面代码和上面的设置请求体参数及以后代码一样
}
```

##### 3.2.4 解析 response body

>[在线工具—OKTools](https://oktools.net/) => 点击 `JSON 转 Go Struct`，然后点击 `转化-嵌套`

```go
// 将之前的bodyText转化后的结构体
type AutoGenerated struct {
    Rc int `json:"rc"`
    Wiki struct {
        KnownInLaguages int `json:"known_in_laguages"`
        Description struct {
            Source string `json:"source"`
            Target interface{} `json:"target"`
        } `json:"description"`
        ID string `json:"id"`
        Item struct {
            Source string `json:"source"`
            Target string `json:"target"`
        } `json:"item"`
        ImageURL string `json:"image_url"`
        IsSubject string `json:"is_subject"`
        Sitelink string `json:"sitelink"`
    } `json:"wiki"`
    Dictionary struct {
        Prons struct {
            EnUs string `json:"en-us"`
            En string `json:"en"`
        } `json:"prons"`
        Explanations []string `json:"explanations"`
        Synonym []string `json:"synonym"`
        Antonym []string `json:"antonym"`
        WqxExample [][]string `json:"wqx_example"`
        Entry string `json:"entry"`
        Type string `json:"type"`
        Related []interface{} `json:"related"`
        Source string `json:"source"`
    } `json:"dictionary"`
}
```

> 将自动生成的构造体替换掉之前我们假定的构造体，然后添加以下语句
>
> ```go
> // 定义结构体变量
> var dictResponse DictRequest
> // 将得到的字符串反序列化为结构体
> err = json.Unmarshal(bodyText, &dictResponse)
> if err != nil {
>     log.Fatal(err)
> }
> // 更加详细的打印
> fmt.Printf("%#v\n", dictResponse)
> ```

##### 3.2.5 打印结果

```go
// 最终的完整代码
package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io/ioutil"
    "log"
    "net/http"
    "os"
)
// 包含用户查询单词的请求结构体
type DictRequest struct {
    TransType string `json:"trans_type"`
    Source    string `json:"source"`
    UserID    string `json:"user_id"`
}
// 服务器返回的响应结构体
type DictResponse struct {
    Rc   int `json:"rc"`
    Wiki struct {
        KnownInLaguages int `json:"known_in_laguages"`
        Description     struct {
            Source string      `json:"source"`
            Target interface{} `json:"target"`
        } `json:"description"`
        ID   string `json:"id"`
        Item struct {
            Source string `json:"source"`
            Target string `json:"target"`
        } `json:"item"`
        ImageURL  string `json:"image_url"`
        IsSubject string `json:"is_subject"`
        Sitelink  string `json:"sitelink"`
    } `json:"wiki"`
    Dictionary struct {
        Prons struct {
            EnUs string `json:"en-us"`
            En   string `json:"en"`
        } `json:"prons"`
        Explanations []string      `json:"explanations"`
        Synonym      []string      `json:"synonym"`
        Antonym      []string      `json:"antonym"`
        WqxExample   [][]string    `json:"wqx_example"`
        Entry        string        `json:"entry"`
        Type         string        `json:"type"`
        Related      []interface{} `json:"related"`
        Source       string        `json:"source"`
    } `json:"dictionary"`
}
// 提取出核心代码，整合为一个函数
func query(word string) {
    client := &http.Client{}
    request := DictRequest{TransType: "en2zh", Source: word}
    buf, err := json.Marshal(request)
    if err != nil {
        log.Fatal(err)
    }
    // 这里返回的是byte数组
    var data = bytes.NewReader(buf)
    req, err := http.NewRequest("POST", "https://api.interpreter.caiyunai.com/v1/dict", data)
    if err != nil {
        log.Fatal(err)
    }
    req.Header.Set("Connection", "keep-alive")
    req.Header.Set("DNT", "1")
    req.Header.Set("os-version", "")
    req.Header.Set("sec-ch-ua-mobile", "?0")
    req.Header.Set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36")
    req.Header.Set("app-name", "xy")
    req.Header.Set("Content-Type", "application/json;charset=UTF-8")
    req.Header.Set("Accept", "application/json, text/plain, */*")
    req.Header.Set("device-id", "")
    req.Header.Set("os-type", "web")
    req.Header.Set("X-Authorization", "token:qgemv4jr1y38jyq6vhvi")
    req.Header.Set("Origin", "https://fanyi.caiyunapp.com")
    req.Header.Set("Sec-Fetch-Site", "cross-site")
    req.Header.Set("Sec-Fetch-Mode", "cors")
    req.Header.Set("Sec-Fetch-Dest", "empty")
    req.Header.Set("Referer", "https://fanyi.caiyunapp.com/")
    req.Header.Set("Accept-Language", "zh-CN,zh;q=0.9")
    req.Header.Set("Cookie", "_ym_uid=16456948721020430059; _ym_d=1645694872")
    resp, err := client.Do(req)
    if err != nil {
        log.Fatal(err)
    }
    defer resp.Body.Close()
    bodyText, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        log.Fatal(err)
    }
    // 判断接口的状态码是否为200
    if resp.StatusCode != 200 {
        log.Fatal("bad StatusCode:", resp.StatusCode, "body", string(bodyText))
    }
    var dictResponse DictResponse
    err = json.Unmarshal(bodyText, &dictResponse)
    if err != nil {
        log.Fatal(err)
    }
    // 打印需求的部分
    fmt.Println(word, "UK:", dictResponse.Dictionary.Prons.En, "US:", dictResponse.Dictionary.Prons.EnUs)
    // 循环遍历打印
    for _, item := range dictResponse.Dictionary.Explanations {
        fmt.Println(item)
    }
}

func main() {
    // 判断命令和参数的个数
    if len(os.Args) != 2 {
        // 不是2个，直接提示错误
        fmt.Fprintf(os.Stderr, `usage: simpleDict WORD
example: simpleDict hello
		`)
        // 并结束程序
        os.Exit(1)
    }
    // 否则，开始查询单词意思
    word := os.Args[1]
    query(word)
}
```

> 预期结果
>
> ![image-20230119193532646](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230119193532646.png)

#### 3.3 Socket5

## Go进阶-工程实践 | 青训营笔记

### 1. 语言进阶

#### 1.1 并发 VS 并行

>你可能已对 Go 在并发方面的出色表现有所耳闻。 也许正是这一最突出的功能使 Go 如此受欢迎，让它成为了编写 `Docker`、`Kubernetes` 和 `Terraform` 等其他软件的理想之选。
>
>但是在开始了解 Go 并发之前，你可能需要忘记从其他编程语言中已经了解的知识，因为Go 使用的方法截然不同。

1. 多线程程序在一个核的cpu上运行

  ![image-20230116130558267](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230116130558267.png)

2. 多线程程序在多个核的cpu上运行

   ![image-20230116130831560](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230116130831560.png)

>Go可以充分发挥多核优势，高效运行

#### 1.2 Goroutine

>`Goroutine` 是轻量线程中的并发活动，而不是在操作系统中进行的传统活动。 假设你有一个写入输出的程序和另一个计算两个数字相加的函数。 一个并发程序可以有数个 `Goroutine` 同时调用这两个函数。
>
>我们可以说，程序执行的第一个 `Goroutine` 是 `main()` 函数。 如果要创建其他 `Goroutine` ，则必须在调用该函数之前使用 `go` 关键字：
>
>```go
>func main(){
>    go launch()
>}
>```

```go
package main

import (
	"fmt"
	"time"
)

func main() {
    HelloGoroutine()
}
// 打印当前数值
func hello(i int) {
	fmt.Println("hello goroutine:" + fmt.Sprint(i))
}
// 并发
func HelloGoroutine() {
	for i := 0; i < 5; i++ {
		go func(j int) {
			hello(j)
		}(i)
	}
    // 睡眠一秒
	time.Sleep(time.Second)
}
```

#### 1.3 Channel

>Go 中的 `channel` 是 `goroutine` 之间的通信机制。 这就是为什么我们之前说过 Go 实现并发的方式是：“**不是通过共享内存通信，而是通过通信共享内存**。”需要将值从一个 `goroutine` 发送到另一个时，可以使用通道。
>
>由于 `channel` 是发送和接收数据的通信机制，因此它也有类型之分。这意味着你只能发送 `channel` 支持的数据类型。 除使用关键字 `chan` 作为 `channel` 的数据类型外，还需指定将通过 `channel` 传递的数据类型，如 `int` 类型。
>
>```go
>// 基本形式
>make(chan type)
>// 无缓冲通道
>make(chan int)
>// 有缓冲通道
>make(chan int, 2)
>// 缓冲通道可以理解为可以同时有几个线程来执行
>```
>
>一个 `channel` 可以执行两项操作：发送数据和接收数据。 若要指定 `channel` 具有的操作类型，需要使用 `channel` 运算符 `<-`。 
>
>如果希望 `channel` 仅发送数据，则必须在 `channel` 之后使用 `<-` 运算符，如果希望 `channel` 接收数据，则必须在 `channel` 之前使用 `<-` 运算符此外，而在 `channel` 中发送数据和接收数据属于阻止操作。
>
>```go
>ch <- x // 通过通道ch发送（或写入）数据x
>x = <-ch // x接收（或读取）数据，发送到通道ch
><-ch // 接受数据，但是结果被丢弃，相当于临时变量
>```
>
>最后是关闭通道，和其他语言中的文件操作一样，用完需要进行最后的关闭操作，释放资源。
>
>```go
>close(ch)
>```

```go
package main

func main() {
    // 创建无缓冲通道
    src := make(chan int)
    // 创建有缓冲通道
    dest := make(chan int, 3)
    go func() {
        // 最后执行关闭通道
        defer close(src)
        // 发送0~9到通道src中
        for i := 0; i < 10; i++ {
            src <- i
        }
    }()
    go func() {
        // 最后执行关闭通道
        defer close(dest)
        // 从通道src中取数据，并将数据平方后存入通道dest中
        for i := range src {
            dest <- i * i
        }
    }()
    // 输出最后的平方数
    for i := range dest {
        println(i)
    }
}
```

#### 1.4 并发安全Lock

>多线程中都有的问题，并发中的线程安全问题，然后保证多个线程不会相互干扰，锁的应用就出来了。

```go
package main

import (
    "sync"
    "time"
)
// 创建全局变量
var (
    x    int64
    lock sync.Mutex
)
// 对变量进行2000次的+1操作，并在每次操作都加上锁，保证不会有其他线程影响本线程操作
func addWithLock() {
    for i := 0; i < 2000; i++ {
        // 加锁
        lock.Lock()
        x += 1
        // 解锁
        lock.Unlock()
    }
}
// 同样对变量进行2000次的+1操作，但是不加锁
func addWithoutLock() {
    for i := 0; i < 2000; i++ {
        x += 1
    }
}
func main() {
    // 初始化变量
    x = 0
    // 创建5个协程并发执行
    for i := 0; i < 5; i++ {
        addWithoutLock()
    }
    time.Sleep(time.Second)
    println("WithoutLock:", x)// 这个看情况，一般小于10000
    // 重置
    x = 0
    // 创建5个协程并发执行
    for i := 0; i < 5; i++ {
        addWithLock()
    }
    time.Sleep(time.Second)
    println("WithLock:", x)// 10000
}
```

### 2. 依赖管理

#### 2.1 Go依赖管理演进

> Go的依赖管理分别经历了GOPATH -> Go Vendor -> Go Module，目前被广泛采用的是Go Module，整个演进路线主要围绕两个目标来迭代发展：不同环境（项目）依赖的版本不同、控制依赖库的版本。

##### 2.1.1 GOPATH

> GOPATH是Go语言支持的一个环境变量，有以下结构：
>
> - src：存放Go项目的源码
> - pkg：存放编码的中间产物，加快编译速度
> - bin：存放Go项目编译生成的二进制文件
>
> 弊端：
>
> 如果多个项目依赖同一个库，则依赖该库的同一份代码，所以不同项目不能依赖同一个库的不同版本，这很显然不能满足项目依赖需要，为解决该问题，Go Vendor出现了。

##### 2.1.2 Go Vendor

> vendor是当前项目中的一个目录，其中存放了当前项目依赖的版本。在Vendor机制下，如果当前项目存在Vendor目录，会优先使用该目录下的依赖，如果依赖不存在，会从GOPATH中寻找。但vender不能很好解决依赖包的版本变动问题和一个项目依赖同一个包的不同版本的问题。

##### 2.1.3 Go Module

>Go Moldules是GO语言官方推出的依赖管理系统，解决了之前依赖管理系统存在的诸加无法依赖同一个库的多个版本等问题，通过`go.mod`文件管理依赖包版本，通过`go get/go mod`指令工具管理依赖包。

### 3. 测试

#### 3.1 单元测试

![image-20230117210326162](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117210326162.png)

> 单元测试主要包括、输入、测试单元、输出以及校对，单元的概念比较广，包括接口、函数、模块等；用最后的校对来保证代码的功能与我们的预期相符：
>
> 1. 单测一方面可以保证质量，在整体覆盖率足够的情况下，一定程度上既保证了新功能本身的正确性，又未破坏原有代码的正确性。
>
> 2. 另一方面可以提升效率，在代码有bug的情况下，通过编写单测，可以在一个较短周期内定位和修复问题。

##### 3.1.1 规则

> 1. 所有测试文件都以`_test.go`结尾
>
>      ![image-20230117211654885](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117211654885.png)
>
> 2. `func TestXxx(t *testing.T)`
>
>      ![image-20230117211736761](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117211736761.png)
>
> 3. 初始化逻辑放到 `TestMain` 里
>
>      ![image-20230117213220135](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117213220135.png)

##### 3.1.2 例子

```go
// hello.go文件中的函数
func HelloTom() string {
    // 这里模拟因为业务上的错误，导致最后输出的是错误结果
    return "helloJerry"
}

// hello_test.go文件中对应的测试函数
func TestHelloTom() {
    // 接收目标测试函数返回的结果
    output := HelloTom()
    // 期待目标函数返回的结果
    expect := "helloTom"
    // 如果两者不匹配，直接抛错，并且打印出来这两个结果
    if output != expect {
        t.Errorf("不匹配，output:%v，expect:%v", output, expect)
    }
}
```

##### 3.1.3 运行

>运行测试函数的方法有几种，
>
>1. 方式一（`goland`）：
>
>   ![image-20230117215202920](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117215202920.png)
>
>   注意要选中目标文件和测试文件两个，如果只选中一个`Run`不会有这种选项。
>
>2. 方式二（`Terminal`）：
>
>   ```go
>   // 测试文件内的所有函数
>   go test [flags] [packages]
>   // 想只测试文件中的一个函数
>   // 前提是当前位置是文件所在的文件夹位置
>   go test -v -run [函数名称]
>   ```
>
>   ![image-20230117215811504](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117215811504.png)

![image-20230117214909374](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117214909374.png)

> 这里肯定是测试不通过的，因为两个结果不同，如果把目标函数中的返回结果改正，那么
>
> ![image-20230117215901181](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117215901181.png)

##### 3.1.4 assert

> 不用多写代码的测试比较工具——`assert（断言）`，
>
> ```go
> // 安装工具包
> go get -i github.com/stretchr/testify/assert
> ```
>
> ![image-20230117220319302](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117220319302.png)

##### 3.1.5 覆盖率

>目前我们了解了如何单元测试，那么如何衡量代码是否经过了足够的测试？如何评价项目的测试水准？
>如何评估项目是否达到了高水准测试等级？（致命三连😆）————那就是代码覆盖率
>
> ![image-20230117220902643](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117220902643.png)
>
> ![image-20230117220920158](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117220920158.png)
>
>![image-20230117221144424](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117221144424.png)
>
>> 嗯哼，解释一下，我这里这么低的覆盖率，是因为还有很多函数没有测试到，我只测试了 `TestScoreCheck` 这一个函数，如果你文件中只有这一个函数，覆盖率应该是`100%`。
>>
>> 但是如果 `ScoreCheck`中是
>>
>> ```go
>> if score >= 60 {
>>     return true
>> }
>> return false
>> ```
>>
>> 那么覆盖率应该是 `66.7%`，其实覆盖率就是当前所举用例可以`执行目标函数的代码行数的占比`
>
> ![image-20230117222027630](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117222027630.png)
>
>再加个用例，覆盖率就达到百分之百了。

tips：

- 一般的要求是50%~60%覆盖率，而对于资金型服务，覆盖率可能要求达到80%+
- 我们做单元测试，测试分支相互独立、全面覆盖
- 要求函数体足够小，这样就比较简单的提升覆盖率，也符合函数设计的单一职责

#### 3.2 文件处理

```go
// read.go中的目标函数
func ReadFirstLine() string {
    // 操作文件，可能需要提前在文件中添加一写数据
    // line11
    // line22
    // line33
    // line44
    open, err := os.Open("log.txt")
    // 最后关闭文件，释放资源
    defer open.Close()
    // 如果有异常，返回空字符串
    if err != nil {
        return ""
    }
    // 创建扫描器
    scanner := bufio.NewScanner(open)
    for scanner.Scan() {
        return scanner.Text()
    }
    return ""
}
func ProcessFirstLine() string {
    // 读取第一行数据
	line := ReadFirstLine()
    // 将数据中的“11”全部替换为“00”
	destLine := strings.ReplaceAll(line, "11", "00")
    // 返回修改后的数据
	return destLine
}

// read_test.go中的测试函数
func TestProcess(t *testing.T) {
    firstLine := ProcessFirstLine()
	assert.Equal(t, "line00", firstLine)
}
```

![image-20230117223233564](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117223233564.png)

#### 3.3 Mock

>这里我们用了Monkey，monkey是一个开源的mock测试库，可以对method，或者实例的方法进行mock，
>反射，指针赋值。Mockey Patch的作用域在Runtime，在运行时通过通过Go的unsafe包，能够将内存中函数的地址替换为运行时函数的地址，将待打桩函数或方法的实现跳转到。
>
>```go
>// 下载monkey包
>go get -i github.com/bouk/monkey
>```

```go
func TestWithMock(t *testing.T) {
    // 对ReadFirstLine打桩测试，不再依赖本地文件
    monkey.Patch(ReadFirstLine, func() string {
        return "line110"
    })
    // 释放资源
    defer monkey.Unpatch(ReadFirstLine)
    line := ProcessFirstLine()
    // 比较结果
    assert.Equal(t, "line000", line)
}
```

#### 3.4 基准测试

>Go 语言还提供了基准测试框架，基准测试是指测试一段程序的运行性能及耗费CPU的程度，而我们在实际项目开发中，经常会遇到代码性能瓶颈，为了定位问题经常要对代码做性能分析，这就用到了基准测试，使用方法类似于单元测试,

##### 3.4.1 例子

```go
// jizhun.go文件函数详情
// 模拟随机选择执行服务器
import (
    "math/rand"
)
// 创建服务器数组
var ServerIndex [10]int
// 初始化服务器中的数据
func InitServerIndex() {
    for i := 0; i < 10; i++ {
        ServerIndex[i] = i + 100
    }
}
// 模拟随机选择服务器
func Select() int {
    return ServerIndex[rand.Intn(10)]
}
```

```go
// jizhun_test.go文件函数详情
// 基准测试为benchmark，所以是*testing.B
func BenchmarkSelect(b *testing.B) {
    // 初始化数据
	InitServerIndex()
    // 重置因为初始化耗费的时间，这些操作不应该作为基准测试的范围
	b.ResetTimer()
    // 对一个测试用例的默认测试时间是1秒，当测试用例函数返回时还不到1秒，那么 testing.B中的N值将按1、2、5、10、20、50...递增，并以递增后的值重新进行用例函数测试
	for i := 0; i < b.N; i++ {
		Select()
	}
}
// runparallel是多协程并发测试，执行2个基准测试，发现代码在并发情况下存在劣化，主要原因是rand为了保证全局的随机性和并发安全，持有了一把全局锁。
func BenchmarkSelectParallel(b *testing.B) {
    // 初始化
	InitServerIndex()
    // 重置时间
	b.ResetTimer()
    // 多协程并发测试
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			Select()
		}
	})
}
```

 ![image-20230117225445580](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117225445580.png)

##### 3.4.2 优化

 ![image-20230117225617960](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117225617960.png)

>为了解决这一随机性能问题，字节开源了一个高性能脑加数方法`fastrand`，再做一下基准测试，性能提升了百倍。主要的思路是牺牲了一定的数列一致性，在大多数场合是适合的，如果在后面遇到随机的场景可以尝试用一下。
>
>```go
>go get -i github.com/bytedance/gopkg
>```
>
>![image-20230117225930669](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230117225930669.png)

### 4. 项目实践

#### 4.1 需求分析

- 展示话题（标题，文字描述）和回帖列表
- 暂不考虑前端页面实现，仅仅实现一个本地web服务
- 话题和回帖数据用文件存储

#### 4.2 需求用例

 <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230118194327077.png" alt="image-20230118194327077 " style="zoom:67%;" />

>从用例分析一步步拆解实现，主要涉及21功能点，用户浏览消费，涉及页面的展示，包括划题内容和回帖的列表，其实从图中我们应该会抽出2个实体的，而实体的属性以及它们之间的联系也需要好好考虑。

#### 4.3 E-R图

>下面是个E-R图，用来描述现实世界的概念摸型，有了模型实体，属性以及之间的联系，对我们后续做开发就提供了比较清晰的思路。回到需求，两个实体主要包括，实体的属性，实体的联系，有了实体模型，下一步就是思考代码结构设计，我们采用典型的分层结构设计。
>
>- Topic（one—话题）：
>  - id
>  - title
>  - content
>  - create_time
>- Post（many—帖子）：
>  - id
>  - topic_id
>  - content
>  - create_time

#### 4.4 分成结构

>整体分为三层，repository数据层，service逻辑层，controoler视图层。
>
>Repository数据层关联底层数据摸型，也就是这里的model，封装外部数据的增删改查，我们的数据存储在本地文件，通过文件操作拉取话题、帖子数据；数据层面向逻辑层，对service层透明，屏蔽下游数据差异，也就是不管下游是文件，还是数据库，还是微服务等，对service层的接口模型是不变的。
>
>Servcie逻辑层处理核心业务逻辑，计算打包业务实体entity，对应我们的需求，就是话题页面，包括话题和回帖列表，并上送给视图层。
>
>Controller视图层负责处理和外部的交互逻辑，以view视图的形式返回给客户端，对于我们需求，我们封装json格式化的请求结果，api形式访问就好。
>
>- 数据层：数据 Model，外部数据的增删改查
>- 逻辑层：业务 Entity，处理核心业务逻辑输出
>- 视图层：视图 View，处理和外部的交互逻辑

#### 4.5 组件工具

> - Gin 高性能 go web 框架
>   - https://github.com/gin-gonic/gin#installation
> - Go Mod
>   - go mod init
>   - go get

#### 4.6 Repository

```go
type Topic struct {
    id
}
```

## Go性能优化-高质量编程 | 青训营笔记

### 1. 简介

> 什么是**高质量编程**？
>
> >编写的代码能够达到正确可靠、简洁清晰的目标可称之为高质量代码
>
> - 正确性：是否考虑各种边界条件，错误的调用是否能够处理
> - 可靠性：异常情况或者错误的处理策略是否明确，依赖的服务出现异常是否能够处理
> - 简洁：逻辑是否简单，后续调整功能或新增功能是否能够快速支持
> - 清晰：其他人在阅读理解代码的时候是否能清楚明白，重构或者修改功能是否不会担心出现无法预料的问题

> **编程原则**
>
> > 实际应用场景千变万化，各种语言的特性和语法各不相同但是高质量编程遵循的原则是相通的
>
> **简单性**
>
> - 消除”多余的复杂性”，以简单清晰的逻辑编写代码
> - 不理解的代码无法修复改进（也就是常说的“屎山”）
>
> **可读性**
>
> - 代码是写给人看的，而不是机器
> - 编写可维护代码的第一步是确保代码可读
>
> **生产力**
>
> - 团队整体工作效率非常重要
>   - 例如代码规范

### 2. 编码规范

#### 2.1 代码格式

> 首先是推荐使用 `gofmt` 自动格式化代码，保证所有的Go代码与官方推荐格式保持一致，而且可以很方便的进行配置，像 `Goland` 内置了相关功能，直接开启即可在保存文件的时候自动格式化
>
> 另外可以考虑 `goimports`，会对依赖包进行管理，自动增删依赖的包引用，按字母序排序分类，具体可以根据团队实际情况配置使用之所以将格式化放在第一条，因为这是后续规范的基础，团队合作 `review` 其他人的代码时就能体会到这条规范的作用了

#### 2.2 注释

>大多数时候我们都在关注代码实现，但是注释的重要性容易被忽视
>
>- 注释应该解释代码作用
>- 注释应该解释代码如何做的
>- 注释应该解释代码实现的原因
>- 注释应该解释代码什么情况会出错
>
>>好的代码有很多注释，坏代码需要很多注释

##### 1、注释应该解释代码作用

>适合注释公共符号

>首先是注释应该解释代码作用，这种注释适合说明公共符号，比如对外提供的函数注释描述它的功能和用途。只有在函数的功能简单而明显时才能省路这些注释（例如，简单的取值和设值函教）另外注释要避免啰嗦，不要对显而易见的内容进行说明。
>
>![image-20230124111936110](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124111936110.png)
>
>下面的代码中注释就没有必要加上，通过名称可以很容易的知道作用。
>
>![image-20230124111956892](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124111956892.png)

##### 2、注释应该解释代码如何做的

> 适合注释实现过程

>第二种注释是对代码中复杂的，并不明显的逻辑进行说明，适合注释实现过程
>
>![image-20230124112205871](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124112205871.png)
>
>上面这段代码是给新 `url` 加上最近的 `referer` 信息，并不是特别明显，所以注释说明了一下
>
>下面的是一个反例，虽然是对过程注释，但是描述的是显而易见的流程，注意不要用自然语言直接翻译代码作为注释，信息冗余还好，有时候表述不一定和代码一致
>
> <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124112230700.png" alt="image-20230124112230700 " style="zoom:50%;" />

##### 3、注释应该解释代码实现的原因

> - 适合解释代码的外部因素
> - 提供额外上下文

>第三条，注释可以解释代码的外部因素，这些因素脱离上下文后通常很难理解
>
>![image-20230124112735125](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124112735125.png)
>
>>https://github.com/golang/go/blob/master/src/net/http/client.go#L521
>
>示例中有一行 `shouldRedirect=false` 的语句，如果没有注释，无法清楚地明白为什么会设置 `false` ，所以注释里提到了这么做的原因，给出了上下文说明

##### 4、注释应该解释代码什么情况会出错

> 适合解释代码的限制条件

>第四，注释应该提醒使用者—些潜在的限制条件或者会无法处理的情况
>
>![image-20230124112946747](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124112946747.png)
>
>>https://github.com/golang/go/blob/master/src/time/format.go#L1411
>
>例如函数的注释中可以说明是否存在性能隐患，输入的限制条件，可能存在哪些错误情况，让使用者无需了解实现细节，示例介绍了解析时区字符串的流程，同时对可能遇到的不规范字符串处理进行了说明

##### 5、公共符号始终要注释

>- 包中声明的每个公共的符号:变量、常量、函数以及结构都需要添加注释
>- 任何既不明显也不简短的公共功能必须予以注释
>- 无论长度或复杂程度如何,对库中的任何函数都必须进行注释

> ![image-20230124113415472](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124113415472.png)
>
> > https://github.com/golang/go/blob/master/src/io/io.go#L694
>
> 示例是一个公共函数的注释说明，结合之前提到的规范，注释表述了函数的功能和如何工作的
>
> **当然也有例外**，就是注释没有提供有用的信息。它没有告诉你这个方法做了什么，更糟糕是它告诉你去看其他地方的文档，在这种情况下，建议完全删除该注释
>
> ![image-20230124113717610](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124113717610.png)

##### 6、小结

- 代码是最好的注释
- 注释应该提供代码未表达出的上下文信息

#### 2.3 命名规范

##### 2.3.1 Variable

> 写代码中最常见的就是命名了，最头疼的也是命名了，想想就开始纠结了😂

>- **简洁**胜于冗长
>- **缩略词全大写**，但当其位于变量开头且不需要导出时，使用全小写
>  - 例如使用ServeHTTP而不是ServeHttp
>  - 使用XMLHTTPRequest 或者xmlHTTPRequest
>- 变量距离其被使用的地方**越远**，则需要携带**越多的上下文信息**
>  - 全局变量在其名字中需要更多的上下文信息，使得在不同地方可以轻易辨认出其含义

> ![image-20230124114442404](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124114442404.png)
>
> i和index的作用域范围仅限于for循环内部时，index的额外冗长几乎没有增加对于程序的理解，所以更加简单的为好。但是索引的作用域扩展，在循环外也会用到的时候，就要考虑更加符合需求的名称了。

> ![image-20230124114710146](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124114710146.png)
>
> - 将deadline替换成t降低了变量名的信息量。t常代指任意时间，deadline指截止时间，有特定的含义
> - 函数提供给外部调用时，签名的信息很重要，要将自己的功能准确表现出来，自动提示一般也会提示函数的方法签名，通过参数名更好的理解功能很有必要，节省时间

##### 2.3.2 function

>- 函数名不携带包名的上下文信息，因为包名和函数名总是成对出现的
>- 函数名尽量简短
>- 当名为foo的包某个函数返回类型Foo时，可以省略类型信息而不导致歧义
>- 当名为foo的包某个函数返回类型Ⅰ时(T并不是Foo)，可以在函数名中加入类型信息

##### 2.3.3 package

>- 只由小写字母组成。不包含大写字母和下划线等字符
>- 简短并包含一定的上下文信息。例如 `schema`、`task` 等
>- 不要与标准库同名。例如不要使用 `sync` 或者 `strings`
>
>以下规则尽量满足，以标准库包名为例
>
>- 不使用常用变量名作为包名。例如使用 `bufio` 而不是 `buf`
>- 使用单数而不是复数。例如使用 `encoding` 而不是 `encodings`
>- 谨慎地使用缩写。例如使用 `fmt` 在不破坏上下文的情况下比 `format` 更加简短

##### 2.3.4 小结

>- 核心目标是降低阅读理解代码的成本
>- 重点考虑上下文信息，设计简洁清晰的名称
>
>总体来说，命名的核心在于降低阅读理解代码的成本，人们在阅读理解代码的时候会尝试模拟计算机运行程序，好的命名能让人把关注点留在主流程上，清晰地理解程序的功能，避免频繁切换到分支细节，增加理解成本。
>
>>好的命名就像一个好笑话。如果你必须解释它，那就不好笑了

#### 2.4 控制流程

>避免嵌套，保持正常流程清晰

>  <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124125335625.png" alt="image-20230124125335625 " style="zoom:50%;" />
>
> 从最简单的一个 `if else` 条件开始，如果两个分支都包含 `return` 语句，则可以去除冗余的 `else` 方便后续维护，`else` 一般是正常流程，如过需要在正常流程新增判断逻辑，避免分支嵌套

>尽量保持正常代码路径为最小缩进，优先处理错误情况 / 特殊情况，尽早返回或继续循环来减少嵌套

>  <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124125657151.png" alt="image-20230124125657151 " style="zoom:67%;" />
>
> - 最常见的正常流程的路径被嵌套在两个 if 条件内
> - 成功的退出条件是 `return nil`，必须仔细匹配大括号来发现
> - 函数最后一行返回一个错误，需要追溯到匹配的左括号，才能了解何时会触发错误
> - 如果后续正常流程需要增加一步操作，调用新的函数，则又会增加一层嵌套
>
>  <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124125808582.png" alt="image-20230124125808582 " style="zoom:67%;" />
>
> > 调整后
>
>  <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124125855292.png" alt="image-20230124125855292 " style="zoom:67%;" />
>
> >https://github.com/golang/go/blob/master/src/bufio/bufio.go#L277
>
> 上面是go仓库中的代码示例，也是优先处理err情况，保持正常流程的统一

小结：

- 线性原理，处理逻辑尽量走直线，避免复杂的嵌套分支
- 正常流程代码沿着屏幕向下移动
- 提升代码可维护性和可读性
- 故障问题大多出现在复杂的条件语句和循环语句中

#### 2.5 错误和异常处理

##### 2.5.1 简单错误

>- 简单的错误指的是仅出现一次的错误，且在其他地方不需要捕获该错
>- 优先使用 `errors.New` 来创建匿名变量来直接表示简单错误
>- 如果有格式化的需求，使用 `fmt.Errorf`

> ![image-20230124130336256](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124130336256.png)
>
> > https://github.com/golang/go/blob/master/src/net/http/client.go#L802

##### 2.5.2 错误的Wrap和Unwrap

>- 错误的 `Wrap` 实际上是提供了一个 `error` 嵌套另一个 `error` 的能力，从而生成一个 `error` 的跟踪链
>- 在 `fmt.Errorf` 中使用：`%w` 关键字来将一个错误关联至错误链中

> ![image-20230124130659770](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124130659770.png)
>
> 同时结合错误的判定方法来确认调用链中是否有关注的错误出现。这个能力的好处是每一层调用方可以补充自己对应的上下文，方便跟踪排查问题，确定问题的根本原因在哪里

##### 2.5.3 错误判定

>- 判定一个错误是否为特定错误，使用 `errors.ls`
>- 不同于使用 `==`，使用该方法可以判定错误链上的所有错误是否含有特定的错误

> ![image-20230124132323703](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124132323703.png)
>
> > https://github.com/golang/go/blob/master/src/cmd/go/internal/modfetch/sumdb.go#L208

> - 在错误链上获取特定种类的错误，使用 `errors.As`

> ![image-20230124132516245](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124132516245.png)
>
> >https://github.com/golang/go/blob/master/src/errors/wrap_test.go#L255
>
> 它和is的区别在于as会提取出调用链中指定类型的错误，并将错误赋值给定义好的变量，方便后续处理，示例中是把问题的path打印出来了

##### 2.5.4 panic

>- 不建议在业务代码中使用 `panic`
>- 调用函数不包含 `recover` 会造成程序崩溃
>- 若问题可以被屏蔽或解决，建议使用 `error` 代替 `panic`
>- 当程序启动阶段发生不可逆转的错误时，可以在 `init` 或 `main` 函数中使用 `panic`

> ![image-20230124133105546](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124133105546.png)
>
> > https://github.com/Shopify/sarama/blob/main/examples/consumergroup/main.go#L94
>
> 比错误更加严重的就是 `panic`，因为它的出现就意味着程序无法正常工作了

##### 2.5.5 recover

>- `recover` 只能在被 `defer` 的函数中使用
>- 嵌套无法生效
>- 只在当前 `goroutine` 生效
>- `defer` 的语句是后进先出

> ![image-20230124133357745](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124133357745.png)
>
> >https://github.com/golang/go/blob/master/src/fmt/scan.go#L247

> - 如果需要更多的上下文信息，可以 `recover` 后在 `log` 中记录当前的调用栈

> ![image-20230124134040804](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124134040804.png)
>
> > https://github.com/golang/website/blob/master/internal/gitfs/fs.go#L228

##### 2.5.6 小结

- `error` 尽可能提供简明的上下文信息链，方便定位问题
- `panic` 用于真正异常的情况
- `recover` 生效范围，在当前 `goroutine` 的被 `defer` 的函数中生效

>因为错误和异常是不正常的情况，除了希望程序能兼容这些场景外，重要的也有记录问题的上下文信息，方便后续定位原因在明确 `panic recover` 这些功能的作用范围的情况下，编写更可靠的程序

### 3. 性能优化建议	

#### 3.0 简介

>高质量的代码能够完成功能，但是在大规模程序部署的场景，仅仅支持正常功能还不够，我们还要尽可能的提升性能，节省资源成本，接下来就主要介绍性能相关的建议
>
>高性能代码为了效率会用到许多技巧，没有相关背景的人难以理解，不过有些基础性能问题是和语言本身相关的，接下来主要介绍这类内容，对应的调整对可读性和可维护性影响不大在满足正确性、可靠性、健壮性、可读性等质量因素的前提下，设法提高程序的性能
>
>有时候时间效率和空间效率可能对立，此时应当分析那个更重要，作出适当的折衷。例如多花费一些内存来提高性能针对Go语言编程，介绍Go相关的性能优化建议

>- 性能优化的前提是满足正确可靠、简洁清晰等质量因素
>- 性能优化是综合评估，有时候时间效率和空间效率可能对立
>- 针对Go语言特性，介绍Go相关的性能优化建议

#### 3.1 Benchmark

>- 性能表现需要实际数据衡量
>- Go语高提供了支持基准性能测试的 `benchmark` 工具

> 我们以斐波那契数列的函数为例，编写 `fib.go` 和测试文件 `fib_test.go`，然后通过命令行运行 	`benchmark` 可以得到详细的测试结果（`-benchmem` 表示也统计内存消息）
>
> ```go
> // 在两个函数的当前文件下执行此命令（最好文件内只有这两个文件）
> go test -bench . -benchmem
> ```
>
>  <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124174116273.png" alt="image-20230124174116273 " style="zoom:50%;" />
>
> ![image-20230124180605252](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124180605252.png)
>
> > 简单介绍一下各项的含义：
> >
> > - `BenchmarkFib10` 是测试函数名；-8表示 `GOMAXPROCS` 的值为8
> > - 表示一共执行 `4786677` 次即 `b.N` 的值
> > - 每次执行花费 `250.4ns` 
> > - 每次执行申请多大的内存
> > - 每次执行申请几次内存

#### 3.1 Slice

> `Slice` 是go中最常见的结构，也非常的方便，同样在使用过程中需要注意性能的点

##### 1、Slice预分配内存

> 尽可能在使用 `make()` 初始化切片的时候提供容量信息，特别是在追加切片的时候
>
> <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124184334270.png" alt="image-20230124184334270 " style="zoom:45%;" /><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124184355567.png" alt="image-20230124184355567 " style="zoom:45%;" />
>
> ![image-20230124185140964](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124185140964.png)
>
> 对比看下两种情况的性能表现，左边是没有提供初始化容量信息，右边是设置了容量大小结果中可以看出执行时间相差很多（第二个数据可以简单的看成1s执行了几次），预分配只有一次内存分配

> why？为什么会有怎么大的性能差异？
>
> - 切片本质是一个数组片段的描述
>   - 包括数组指针
>   - 片段的长度
>   - 片段的容量（不改变内存分配情况下的最大长度）
>   - 切片操作并不复制切片指向的元素
> - 创建一个新的切片会复用原来切片的底层数组
>
>  <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124192410790.png" alt="image-20230124192410790 " style="zoom:50%;" /><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124192434534.png" alt="image-20230124192434534 " style="zoom:50%;" />
>
> >https://ueokande.github.io/go-slice-tricks/
>
> >以切片的 `append` 为例，`append` 时有两种场景:
> >
> >- 当 `append` 之后的长度小于等于`cap`，将会直接利用原底层数组剩余的空间
> >
> >- 当 `append` 后的长度大于 `cap` 时，则会分配一块更大的区域来容纳新的底层数组
> >
> >因此，为了避免内存发生拷贝，如果能够知道最终的切片的大小，预先设置 `cap` 的值能够避免额外的内存分配，获得更好的性能

##### 2、大内存未释放

>- 在已有切片基础上创建切片，不会创建新的底层数组
>- 场景
>  - 原切片较大，代码在原切片基础上新建小切片
>  - 原底层数组在内存中有引用，得不到释放
>- 可使用 `copy` 替代，`re-slice`

>   <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124200032945.png" alt="image-20230124200032945 " style="zoom:50%;" />
>
>  <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124200131291.png" alt="image-20230124200131291 " style="zoom:50%;" />
>
> > ```go
> > go test -run=. -v
> > ```
> >
> > 或直接选中两个文件使用 `goland` 中的 `run`，里面有测试功能
>
>  ![image-20230124200405982](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124200405982.png)
>
> 两部分代码使用了不同的逻辑取 `slice` 的最后两位数创建新数组，同时统计输出了内存占用信息
>
> 结果差异非常明显，`lastBySlice` 耗费了100.2MB 内存，也就是说，申请的 100 个 1MB 大小的内存没有被回收。因为切片虽然只使用了最后2个元素，但是因为原来 1M 的切片引用了相同的底层数组，底层数组得不到释放，因此最终 100MB 的内存始终得不到释放；而 `lastByCopy` 仅消耗了 1.17MB 的内存，这是因为，通过copy，指向了一个新的底层数组，当 `origin` 不再被引用后，内存会被垃圾回收

#### 3.2 Map

> `map` 预分配内存

> <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124201434669.png" alt="image-20230124201434669 " style="zoom:43%;" /><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124201457199.png" alt="image-20230124201457199 " style="zoom:43%;" />
>
>![image-20230124202201351](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124202201351.png)
>
>~可能是电脑的问题，总是10000，估计配置不太行，运算速度太慢了~
>
>> - 不断向 `map` 中添加元素的操作会触发 `map` 的扩容
>> - 提前分配好空间可以减少内存拷贝和 `Rehash` 的消耗
>> - 建议根据实际需求提前预估好需要的空间

#### 3.3 字符串处理

> 使用 `strings.Builder`

> <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124203330618.png" alt="image-20230124203330618 " style="zoom:37%;" /><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124203352486.png" alt="image-20230124203352486 " style="zoom:37%;" />
>
> <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124203506740.png" alt="image-20230124203506740 " style="zoom:37%;" />
>
>![image-20230124204507640](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124204507640.png)
>
>~可能是电脑太拉了，跑Plus感觉跑了一万年😭~
>
>>使用＋拼接性能最差，`strings.Builder`、`bytes.Buffer` 相近，`strings.Buffer` 更快
>
>- 字符串在Go语言中是不可变类型，占用内存大小是固定的
>- 使用＋每次都会重新分配内存
>- `strings.Builder`、`bytes.Buffer` 底层都是 `[]byte` 数组
>- 内存扩容策略，不需要每次拼接重新分配内存

> <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124204853902.png" alt="image-20230124204853902 " style="zoom:32%;" /><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124204921317.png" alt="image-20230124204921317 " style="zoom:32%;" />
>
>字符串拼接和 `slice` 一样，同样支持预分配，在预知字符串长度的情况下，我们可以进一步提升拼接性能注意这里能确认 `stringbuiler` 只有一次内存分配，`bytebuffer` 有两次
>
>![image-20230124205409847](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124205409847.png)

#### 3.4 空结构图

> 性能优化有时是时间和空间的平衡，之前提到的都是提高时间效率的点，对于空间上是否有优化的手段呢？空结构体是节省内存空间的一个手段
>
> - 空结构体 `struct` 实例不占据任何的内存空间
> - 可作为各种场景下的占位符使用
>   - 节省资源
>   - 空结构体本身具备很强的语义，即这里不需要任何值，仅作为占位符

>  <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124205533423.png" alt="image-20230124205533423 " style="zoom:50%;" />
>
> ![image-20230124210454117](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124210454117.png)
>
> ~可能是电脑的问题，总是10000，估计配置不太行，运算速度太慢了~
>
> >- 实现 `Set`，可以考虑用 `map` 来代替
> >- 对于这个场景，只需要用到 `map` 的键，而不需要值
> >- 即使是将 `map` 的值设置为 `bool` 类型，也会多占据 1 个字节空间

#### 3.5 atomic包

>  <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124211908872.png" alt="image-20230124211908872 " style="zoom:45%;" /><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124211938735.png" alt="image-20230124211938735 " style="zoom:45%;" />
>
> ![image-20230124211843297](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230124211843297.png)
>
> - 锁的实现是通过操作系统来实现，属于系统调用
> - `atomic` 操作是通过硬件实现，效率比锁高
> - `sync.Mutex` 应该用来保护一段逻辑，不仅仅用于保护一个变量
> - 对于非数值操作，可以使用 `atomic.Value`，能承载一个 `interface{}`

#### 3.6 小结

>- 避免常见的性能陷阱可以保证大部分程序的性能
>- 普通应用代码，不要一味地追求程序的性能
>- 越高级的性能优化手段越容易出现问题
>- 在满足正确可靠、简洁清晰的质量要求的前提下提高程序性能

## Go性能优化-性能调优实战 | 青训营笔记

### 1. 简介

>性能调优原则
>
>- 要**依靠数据**不是猜测
>- 要**定位最大瓶颈**而不是细枝末节
>- 不要**过早**优化
>- 不要**过度**优化

### 2. 性能分析工具-pprof

>性能调优的前提是对应用程序性能表现有实际的数据指标，例如希望知道应用在什么地方耗费了多少`CPU`、`Memory`，而对 `go` 来说，`pprof` 是用于数据可视化和分析性能分析数据的非常方便的工具

#### 2.1 功能简介

> ![image-20230125104945896](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125104945896.png)
>
> - 分析：有两种可视化方式
> - 工具：可以在 `runtime/pprof` 中找到源码，同时 `Golang` 的 `http` 标准库中也对 `pprof` 做了一些封装，能让你在 `http` 服务中直接使用它
> - 采样：它可以采样程序运行时的 `CPU`、堆内存、`goroutine`、锁竞争、阻塞调用和系统线程的使用数据
> - 展示：用户可以通过列表、调用图、火焰图、源码、反汇编等视图去展示采集到的性能指标，方便分析
>
> > 说这么多不如来个实践项目来熟悉 `pprof` 的使用😆

#### 2.2 排查实战

##### 1、搭建 pprof 项目

> 既然是练习排查性能问题，那么就需要构造一个有问题的出现，然后利用 `pprof` 来定位性能问题点，这里有一个开源项目，已经构造了一些性能问题来供我们练习
>
> ~开源项目的详细介绍和操作步骤：https://blog.wolfogre.com/posts/go-ppof-practice/~
>
> ```go
> // 使用命令将其下载下来
> go get -d github.com/wolfogre/go-pprof-practice
> // 移动到该项目文件下
> cd $GOPATH/src/github.com/wolfogre/go-pprof-practice
> // 构建该项目
> go build
> // 执行该项目，控制台里应该会不停的打印日志，都是一些“猫狗虎鼠在不停地吃喝拉撒”的屁话，没有意义，不用细看
> ./go-pprof-practice
> ```

##### 2、浏览器查看指标

> 浏览器打开http://localhost:6060/debug/pprof/，会看到：
>
> ![image-20230125120355850](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125120355850.png)
>
> | 类型         | 描述                       |
> | ------------ | -------------------------- |
> | alloc        | 内存分配情况的采样信息     |
> | blocks       | 阻塞操作情况的采样信息     |
> | cmdline      | 显示程序启动命令及参数     |
> | goroutine    | 当前所有协程的堆栈信息     |
> | heap         | 堆上内存使用情况的采样信息 |
> | mutex        | 锁争用情况的采样信息       |
> | profile      | CPU 占用情况的采样信息     |
> | threadcreate | 系统线程创建情况的采样信息 |
> | trace        | 程序运行跟踪信息           |
>
> > 因为 `cmdline` 显示运行进程的命令，没有什么实验价值，`trace` 需要另外的工具解析，且与本文主题关系不大，`threadcreate` 涉及的情况偏复杂不透明，所以这三个类型的采样信息这里暂且不提。除此之外，其他所有类型的采样信息本文都会涉及到，且炸弹程序已经为每一种类型的采样信息埋藏了一个对应的性能问题，以供我们进行实践。
>
> ![image-20230125132259244](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125132259244.png)
>
> 看到的数据可读性很差，长这样，可以看出一些信息但很难阅读它，所以一会儿我们会借助 `pprof` 工具帮我们「阅读」这些指标。

##### 3、CPU

>我们先从CPU问题排查开始，不同的操作系统工具可能不同，我们首先使用自己熟悉的工具看看程序进程的资源占用，CPU占用了20.1%，显然这里是有问题的。
>
>![image-20230125135132516](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125135132516.png)
>
>`pprof` 的采祥结果是将一段时间内的信息汇总输出到文件中，所以首先需要拿到这个 `profile` 文件。你可以直接使用暴露的接口链接下载文件后使用，也可以直接用 `pprof` 工具连接这个接口下载需要的数据，这里我们使用 `go tool pprof +采样链接` 来启动采样。
>
>> go tool pprof http://loaclhost:6060/debug/pprof/profile?seconds=10
>
>链接中就是【炸弹】程序暴露出来的推口，链接结尾的 `profile` 代表采样的对象是 `CPU` 使用。如果你在浏览器里直接打开这个链接，会启动一个60秒的采样，并在结束后下载文件，这里我们加上 `seconds=10` 的参数，让它采样十秒，稍等片刻，我们需要的采样数据已经记录和下载完成，并展示出 `pprof` 终端。
>
>![image-20230125134212904](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125134212904.png)

###### 命令

1、topN

> 查看占用资源最多的函数
>
> ![image-20230125134526335](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125134526335.png)
>
> | flat  | 当前函数本身的执行耗时               |
> | ----- | ------------------------------------ |
> | flat% | flat占CPU总时间的比例                |
> | sum%  | 上面每一行的flat%总和                |
> | cum   | 指当前函数本身加上其调用函数的总耗时 |
> | cum%  | cumCPU时间的比例                     |
>
> > 可以简单的理解为数字越大占用情况越严重
>
> 表格前面描述了采样的总体信息，默认会展示资源占用最高的 10 个函数，如果只需要直看最高的 N 个函数，可以输入 `topN`，例如查看最高的 3 个调用，输入 `top3` 可以看到表格的第一行里，`Tiger.Eat` 函数本身占用 3.41 秒的 `CPU` 时间，占总时间的 96.60%，显然问题就是这里引起的。
>
> >*但是可以看到上图，flat和cum有的是相等的，有点不相等，有的一边直接为0了，why？*
> >
> >`cum-flat` 得到的是函数中**调用其他函数所消耗的资源**，所以在函数中没有对其他函数进行调用时，`cum-flat=0`，也就是 `flat=cum` 相应地，函数中除了调用另外的函数，没有其他逻辑时，`flat=0`

2、list

> 根据指定的正则表达式查找代码行
>
> ![image-20230125140152152](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125140152152.png)
>
> `list` 命令会根据后面给定的正则表达式查找代码，并按行展示出每一行的占用，可以看到，第 24 行有一个100亿次的空循环，占用了 3.41 秒的CPU时间，问题就在这儿了，定位成功。

3、web

> 调用关系可视化
>
> 

##### 4、Heap-堆内存

> 可以看到当我们注释掉问题代码，重新运行后，CPU消耗一下加下来了，然而内存使用依然很高。
>
> ![image-20230125143636244](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125143636244.png)

后面因为某些问题，无法执行 graphviz，请大家移步https://blog.wolfogre.com/posts/go-ppof-practice/，以后解决了会补全。

#### 2.3 采样过程和原理

##### 2.3.1 CPU

> - 采样对象：函数调用和它们占用的时间
> - 采样率：100次/秒，固定值
> - 采样时间：从手动启动到手动结束
>
> ![image-20230125151936002](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125151936002.png)
>
> ![image-20230125153111796](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125153111796.png)

##### 2.3.2 Heap-堆内存

>- 采样程序通过内存分配器在堆上分配和释放的内存，记录分配/释放的大小和数量
>- 采样率：每分配512KB记录一次，可在运行开头修改，1为每次分配均记录
>- 采样时间：从程序运行开始到采样时
>- 采样指标：`alloc space`、`alloc_objects`、`inuse_space`、`inuse_objects`
>- 计算方式：`inuse = alloc - free`

##### 2.3.3 Goroutine-协程& ThreadCreate-线程创建

> ![image-20230125163123710](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125163123710.png)

##### 2.3.4 Block-阻塞& Mutex-锁

>

##### 2.3.5 小结

>- 掌握常用 `pprof` 工具功能
>- 灵活运用 `pprof` 工具分析解决性能问题
>- 了解 `pprof` 的采样过程和工作原理

### 3. 性能调优案例

> 介绍实际业务服务性能优化的案例，对逻辑相对复杂的程序如何进行性能调优

#### 3.1 业务服务优化

>业务服务一般指直接提供功能的程序，比如专门处理用户评论操作的程序

##### 1、基本概念

>- 服务：能单独部署，承载一定功能的程序
>- 依赖：`Service A` 的功能实现依赖 `Service B` 的响应结果，称为 `Service A` 依赖 `Service B`
>- 调用链路：能支持一个接口请求的相关服务集合及其相互之间的依赖关系
>- 基础库：公共的工具包、中间件
>
>![image-20230125153941351](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125153941565.png)
>
>上面是系统部署的简单示意图，客户端请求经过网关转发，由不同的业务服务处理，业务服务可能依赖其他的服务，也可能会依赖存储、消息队列等组件。接下来我们以业务服务优化为例，说明性能调优的流程，图中的 `Service B` 被 `Service A` 依赖，同时也依赖了存储和 `Service D`

##### 2、流程

>- 建立服务性能评估手段
>- 分析性能数据，定位性能瓶颈
>  - 核心，这里也是用的 `pprof` 采样性能数据，分析服务的表现
>
>- 重点优化项改造
>  - 进行重构代码，使用更高效的组件
>
>- 优化效果验证
>  - 通过压测对比和正确性验证之后，服务可以上线进行实际收益评估
>
>
>> 整体的流程可以循环并行执行，每个优化点可能不同，可以分别评估验证

##### 3、建立服务性能评估手段

>- 服务性能评估方式
>
> - 单独 `benchmark` 无法满足复杂逻辑分析
> - 不同负载情况下性能表现差异（下图是负载和单核qps的对应数据）
>
>  <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125155448314.png" alt="image-20230125155448314 " style="zoom:35%;" />
>
> ![image-20230125155549368](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125155549368.png)
>
>- 请求流量构造
>  - 不同请求参数覆盖逻辑不同
>  - 线上真实流量情况，才能分析真正的性能瓶颈
>
>- 压测范围（会录制线上流量请求，通过控制回放速度来对服务进行测试）
>  - 单机器压测
>  - 集群压测
>
>- 性能数据采集
>  - 单机性能数据
>  - 集群性能数据
>
>
>
>> 评估手段建立后，它的产出实际是一个服务的性能指标分析报告
>
>> 实际的压测报告截图，会统计压测期间服务的各项监控指标，包括qps，延迟等内容，同时在压测过程中，也可以采集服务的 `pprof` 数据，使用之前的方式分析性能问题
>
>有了服务优化前的性能报告和一些性能采样数据，我们可以进行性能瓶颈分析了
>
>业务服务常见的性能问题可能是使用基础组件不规，比如这里通过火焰图看出 `JSON` 的解析部分占用了较多的CPU资源，那么我们就能定位到具体的逻辑代码，是在每次使用配置时都会进行 `JSON` 解析，拿到配置项，实际组件内部提供了缓存机制，只有数据变更的时候才需要重新解析JSON
>
>![image-20230125160740003](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125160740003.png)
>
>![image-20230125160805399](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125160805399.png)

##### 4、分析性能数据，定位性能瓶颈

> - 使用库不规范
>
>   > 还有是类似日志使用不规范，一部分是调试日志发布到线上，一部分是线上服务在不同的调用链路上数据有差别，测试场景日志量还好，但是到了真实线上全量场景，会导致日志量增加，影响性能
>   >
>   > <img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125161012809.png" alt="image-20230125161012809 " style="zoom:37%;" />
>
> - 高并发场景优化不足
>
>   >另外常见的性能问题就是高并发场景的优化不足，上者是服务高峰期的火焰图，下者是低峰期的火焰图，可以发现 `metrics`，即监控组件的 `CPU` 资源占用变化较大，主要原因是监控数据上报是同步请求，在请求量上涨，监控打点数据量增加时，达到性能瓶颈，造成阻塞，影响业务逻辑的处理，后续是改成异步上报的机制提升了性能
>   >
>   ><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125161315255.png" alt="image-20230125161315255 " style="zoom:43%;" />
>   >
>   ><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125161402087.png" alt="image-20230125161402087 " style="zoom:43%;" />

##### 5、重点优化项改造

>- 正确性是基础
>- 响应数据 `diff`
>  - 线上请求数据录制回放
>  - 新旧逻辑接口数据 `diff`
>
>性能忧化的前提是保证正确性，所以在变动较大的性能优化上线之前，还需要进行正确性验证，因为线上的场景和流程太多，所以要借助自动化手段来保证优化后程序的正确性
>
>同样是线上请求的录制，不过这里不仅包含请求参数录制，还会录制线上的返回内容，重放时对比线上的返回内容和优化后服务的返回内容进行正确性验证
>
>比如图中作者信息相关的字段值在优化有有变化，需要进一步排查原因
>
>![image-20230125161748262](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125161748262.png)

##### 6、优化效果验证

>- 重复压测验证
>- 上线评估优化效果
>  - 关注服务监控
>  - 逐步放量
>  - 收集性能数据
>
> ![image-20230125162011970](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125162011970.png)![image-20230125162037251](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125162037251.png)
>
>验证分两部分，首先依然是用同样的数据对优化后的服务进行压测，可以看到现在的数据比优化前好很多，能够支持更多的qps正式上线的时候会逐步放量，记录真正的优化效果
>
>同时压测并不能保证和线上表现完全一致，有时还要通过线上的表现再进行分析改进，是个长期的过程

##### 7、进一步优化，服务整体链路分析

> - 规范上游服务调用接口，明确场景需求
> - 分析链路，通过业务流程优化提升服务性能
>
> 在熟悉服务的整体部署情况后，可以针对具体的接口链路进行分析调优，比如 `Service A` 调用 `Service B` 是否存在重复调用的情况，调 `Service B` 服务时，是否更小的结果数据集就能满足需求，接口是否一定要实时数据，能否在 `Service A` 层进行缓存，减轻调用压力
>
> 这种优化只使用与特定业务场景，适用范围窄，不过能更合理的利用资源

#### 3.2 基础库优化

![image-20230125162835686](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1273/image-20230125162835686.png)

#### 3.3 Go语言优化

>适用范围最广的优化，就是针对Go本身进行的优化，会优化编译器和运行时的内存分配策略，构建更高效的go发行版本

>编译器&运行时优化
>
>- 优化内存分配策略
>- 优化代码编译流程，生成更高效的程序
>- 内部压测验证
>- 推广业务服务落地验证
>
>优点
>
>- 接入简单，只需要调整编译配置
>- 通用性强

### 4. 总结

>- 性能调优原则
>   - 要依靠数据不是猜测
>- 性能分析工具 `pprof`
>   - 熟练使用 `pprof` 工具排查性能问题并了解其基本原理
>- 性能调优
>   - 保证正确性
>   - 定位主要瓶颈

## Go自动内存管理 | 青训营笔记

### 1. 自动内存管理

#### 1.1 概念

>- 动态内存
>  - 程序在运行时根据需求动态分配的内存：`malloc()`
>- 自动内存管理（垃圾回收）：由程序语言的运行时系统回收动态内存
>  - 避免手动内存管理，专注于实现业务逻辑
>  - 保证内存使用的**正确性**和**安全性**：`double-free problem`，`use-after-free problem`
>- 三个任务
>  - 为新对象分配空间
>  - 找到存活对象
>  - 回收死亡对象的内存空间
>
>- `Mutator`：业务线程，分配新对象，修改对象指向关系
>- `Collector`：`GC` 线程，找到存活对象，回收死亡对象的内存空间
>- `Serial GC`：只有一个 `collector`
>- `Parallel GC`：支持多个 `collectors` 同时回收的 `GC` 算法
>- `Concurrent GC`：`mutator(s)` 和 `collector(s)` 可以**同时执行**
>  - **Collectors必须感知对象指向关系的改变！**
>- 评价GC算法
>  - 安全性（Safety）：不能回收存活的对象		**<font color=#e31>基本要求</font>**
>  - 吞吐率（Throughput）：1 - （GC时间 / 程序执行时间）**<font color=#e31>花在GC上的时间</font>**
>  - 暂停时间（Pause time）：stop the world（STW）**<font color=#e31>业务是否感知</font>**
>  - 内存开销（Space overhead）**<font color=#e31>GC元数据开销</font>**
>- 追踪垃圾回收（Tracing garbage collection）
>- 引用计数（Reference counting）

#### 1.2 追踪垃圾回收

- 对象被回收的条件:指针指向关系不可达的对象
- 标记根对象
  - 静态变量、全局变量、常量、线程栈等
- 标记：找到可达对象
  - 求指针指向关系的传递闭包：从根对象出发，找到所有可达对象
- 清理：所有不可达对象
  - 将存活对象制到另外的内存空间（Copying GC）
  - 将死亡对象的内存标记为“可分配”（Mark-sweep GC）
  - 移动并整理存活对象（Mark-compact GC）

<font color=#e31>根据对象的生命周期，使用不同的标记和清理策略</font>

#### 1.3 分代GC（Generational GC）

> - 分代假说（Generational hypothesis）：most objects die young
> - `lntuition`：很多对象在分配出来后很快就不再使用了
> - 每个对象都有年龄：经历过GC的次数
> - 目的：对年轻和老年的对象，制定不同的GC策略，**降低整体内存管理的开销**
> - 不同年龄的对象处于 `heap` 的不同区域
>
> 年轻代（Young generation）
>
> - 常规的对象分配
> - 由于**存活对象很少**，可以采用 `copying collection`
> - GC 吞吐率很高
>
> 老年代（Old generation）
>
> - **对象趋向于一直活着，反复复制开销较大**
> - 可以采用 `mark-sweep collection`

#### 1.4 引用计数

>- 每个对象都有一个与之关联的引用数目
>- 对象存活的条件:当且仅当引用数大于0
>
>优点
>
>- 内存管理的操作被平摊到程序执行过程中
>- 内存管理不需要了解 `runtime` 的实现细节：C++ 智能指针（`smart pointer`）
>
>缺点
>
>- 维护引用计数的开销较大：通过**原子操作**保证对引用计数操作的**原子性**和**可见性**
>- 无法回收环形数据结构——`weak reference`
>- 内存开销：每个对象都引入的额外内存空间存储引用数目
>- 回收内存时依然可能引发暂停

#### 1.5 总结

>- 自动内存管理的背景和意义
>- 概念和评价方法
>- 追踪垃圾回收304
>- 引用计数
>- 分代GC
>- 学术界和工业界在一直在致力于解决自动内存管理技术的不足之处
>  - PLDI'22 Low-Latency,High-Throughput Garbage Collection

### 2. Go 内存管理及优化
