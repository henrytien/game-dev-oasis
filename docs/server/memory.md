---
sidebar_position: 2
keywords: [游戏性能内存优化]
---

# 内存分析和性能优化


## Python
objgraph

我们将尝试使用weakref模块创建一个弱引用，以防止对象被回收。

请尝试以下示例：

```python showLineNumbers
import gc
import objgraph
import weakref

class MyClass:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f"MyClass({self.name})"

    def set_friend(self, friend):
        self.friend = friend

    def __del__(self):
        self.weak_self = weakref.ref(self)

def create_objects():
    obj1 = MyClass("Object 1")
    obj2 = MyClass("Object 2")
    obj3 = MyClass("Object 3")

    obj1.set_friend(obj2)
    obj2.set_friend(obj3)
    obj3.set_friend(obj1)

    del obj1
    del obj2
    del obj3

create_objects()

gc.set_debug(gc.DEBUG_SAVEALL)
gc.collect()

if gc.garbage:
    objgraph.show_backrefs(gc.garbage, filename="objgraph_backrefs_garbage.png")
else:
    print("gc.garbage is empty. No objects to draw.")

gc.set_debug(0)
```
在这个示例中，我们修改了MyClass的__del__方法，将对象的弱引用添加到self.weak_self属性。由于弱引用不会阻止对象被回收，这将导致对象无法被回收。

如果这个示例仍然无法生成非空的gc.garbage列表，那么可能是Python的垃圾回收器已经足够强大，可以处理上述示例中的循环引用。在这种情况下，您可以考虑使用其他方法来创建示例对象并绘制反向引用关系图。