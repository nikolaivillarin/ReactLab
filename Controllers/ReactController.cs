using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactLab.Models;

namespace ReactLab.Controllers
{
    public class ReactController : Controller{
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Refs()
        {
            return View();
        }
    }
}