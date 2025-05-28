---
sidebar_position: 1
title: "Chart Props"
description: "Description of each available Chart Prop"
---

# Common Chart Options

These options are available on all of our Tamaki Charts.

## settings

**Type**: `object`

**Description**: An Object with two Key-Value pairs that are as follows:

### lazyUpdate

**Type**: `boolean`

**Default**: `false`

**Description**: 

**Use Cases**:

### notMerge

**Type**: `boolean`

**Default**: `false`

**Description**: 

**Use Cases**:

## loading

**Type**: `boolean`

**Default**: `false`

**Description**: Creates a blurred background over the chart with a loading spinner on top

**Use Cases**: Bind to this value to set loading as true before your data is ready to avoid the component showing an error about missing data.

## options

**Type**: `object`

**Default**: Varies by Chart Variant

**Description**: Prop that controls all details about the chart itself, such as axis information, series information, titles, labels, chart type, etc. Please see [eChart documentation](https://echarts.apache.org/en/option.html#title) for futher details.

**Use Cases**: This is the bread and butter of the chart -- the core functionality of the chart is located here.

## enableJsFunctions

**Type**: `boolean`

**Default**: `false`

**Description**: *This is an advanced feature* -- if enabled, this prop allows for the use of JavaScript functions within your chart. 

**Use Cases**: Use to perform complex calculations or manipulate data before rendering it on the chart.

**Example of Usage**: When set to true, it is possible to use a function as an option value in the options prop. For example, we can prefix all y-axis labels with "Fruit: " by using the following options object:

```JSON
{
    "options": {
        "title": {
            "text": "Example of Label Formatter"
        },
        "tooltip": {},
        "xAxis": {
            "type": "value",
            "name": "Value"
        },
        "yAxis": {
            "type": "category",
            "data": ["Apple", "Banana", "Cherry", "Date", "Elderberry"],
            "axisLabel": {
                "formatter": "function(value, index) { return 'Fruit: ' + value; }"
            }
        },
        "series": [
            {
                "type": "bar",
                "data": [120, 200, 150, 80, 70]
            }
        ]
    }
}
```

Please note that JS functions can only be written in function() {} or () => {} format, and will print console warnings or errors if the syntax is incorrect or if certain banned keywords are used.