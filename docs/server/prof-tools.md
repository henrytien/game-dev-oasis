---
sidebar_position: 1
---

# 常用性能优化工具

比如prof、perf工具。

## C++相关

## Python相关
**pstats**

使用pstats 模块整理输出profile结果
pstats模块是Python标准库的一部分，用于处理由cProfile模块生成的分析结果。使用pstats模块，您可以对分析数据进行排序、过滤和格式化。
首先，我们需要使用cProfile模块对一个示例程序进行性能分析。假设我们有一个名为example_program.py的简单Python脚本，内容如下：

```python showLineNumbers
import time

def slow_function():
    time.sleep(1)

def fast_function():
    passdef main():
    for _ in range(3):
        slow_function()
        fast_function()

if __name__ == "__main__":
    main()
```

现在，我们可以使用以下命令行来运行cProfile分析：

```bash
python -m cProfile -o output.prof example_program.py
```

这将运行example_program.py并将分析结果写入名为output.prof的文件。
接下来，我们将使用pstats模块来整理和输出分析结果。创建一个名为profile_stats.py的新脚本，内容如下：

```python showLineNumbers
import pstats

# Load the profile data from the file
stats = pstats.Stats("output.prof")

# Sort the profile data by the total time spent in each function
stats.sort_stats("tottime")

# Print the top 10 functions by total time spent
stats.print_stats(10)

# Alternatively, you can filter the results by function name
stats.print_stats("slow_function")
```

运行此脚本会输出按“tottime”（即每个函数中总共花费的时间）排序的分析结果。您还可以使用其他字段对结果进行排序，例如“cumtime”（累计时间）或“ncalls”（调用次数）。
通过使用pstats模块，您可以轻松地整理、排序和输出cProfile模块生成的性能分析结果。这使得分析和优化Python程序的性能更加简单。

