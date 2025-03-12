"use client";
import {  formatDateTime } from "@/lib/utils";

export default function OrderDateTimeTableCell({date}: {date: Date}) {
  return (
    <>{formatDateTime(date).dateTime}</>
  )
}