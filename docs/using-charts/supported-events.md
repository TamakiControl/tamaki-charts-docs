---
sidebar_position: 2
title: "Supported Events and Actions"
description: "Description of each available Component Event"
---

# Supported Component Events

So far the only supported events are: `onClick`, which fires when a user clicks on an element within the chart; `onDoubleClick`, which fires when a user double clicks on an element within the chart; and `onDataZoom`, which fires when a user zooms in on a particular element within the chart.

## onClick

**Type**: `function`

**Description**: Fires when a user clicks on an element within the chart.

**Use Cases**: Use to perform custom actions or manipulate data based on user interaction with the chart.

**Example of Usage**: Triggering a drill-down interaction by clicking on a bar in a bar chart.

## onDoubleClick

**Type**: `function`

**Description**: Fires when a user double clicks on an element within the chart.

**Use Cases**: Use to perform custom actions or manipulate data based on user interaction with the chart.

**Example of Usage**: Triggering a drill-down interaction by double clicking on a bar in a bar chart. (Similar to onClick, useful if onClick is bound to another action).

## onDataZoom

**Type**: `function`

**Description**: Fires when a user zooms on an element within the chart.

**Use Cases**: Use to perform custom actions or manipulate data based on user interaction with the chart.

**Example of Usage**: Capturing the points that a user zooms to for use elsewhere in the chart.

