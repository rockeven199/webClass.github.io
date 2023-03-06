### 元素定位

---

文本定位

```python
find_element_by_link_text()
find_element_by_partial_link_text()
```

xpath定位

+ 绝对路径定位

  ```python
  find_element_by_xpath("/html/body/div/div[2]/div/div/div/from/span/input")
  ```

+ 利用元素定位，也可以使用其他唯一的元素定位

  ```python
  find_element_by_xpath("//input[@id='kw']")
  ```

+ 使用*可以不指定标签名

  ```python
  find_element_by_xpath("//*[@id='kw']")
  ```

+ 使用逻辑运算符

  ```python
  find_element_by_xpath("//input[@id='kw' and @class='su']/span/input")
  ```

CSS选择器定位

```python
find_element_by_cas_selector(".s_input")
```

使用By定位元素

+ 导入By包

  ```python
  from selenium.webdriver.common.by.import By
  ```
  
+ 使用By定位元素

  ```python
  find_element(By.ID,"kw")
  find_element(By.NAME,"kw")
  find_element(By.CLASS_NAME,"kw")
  find_element(By.TAG_NAME,"kw")
  find_element(By.LINK_TEXT,"news")
  find_element(By.PARTIAL_LINK_TEXT,"new")
  find_element(By.XPATGH,"//*[class='kw']")
  find_element(By.CSS_SELECTOR,".kw>input#su")
  ```

### 浏览器控制

---

刷新当前页面

```python
driver.refresh()
```

###  WebElement常用接口方法

---

提交方法

```python
driver.find_element_by_id("kw").submit()
```

​		还可搭配以下方法/

+ size: 返回元素尺寸
+ text:获取元素文本
+ get_attribuite():获取属性值
+ is_displayed():设置该元素是否可见
